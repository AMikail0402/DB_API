pipeline {
    agent any
    environment {
        IMAGE_SHA = ''
    }
    stages {
        
        stage('Cleanup Docker'){
            steps{
                //Containers
                script{  
                def containers = sh(script: "sudo docker ps -q", returnStdout: true).trim()   
                sh("echo 'Containers Output: ${containers}'") 
                if(containers != ""){
                    sh("sudo docker kill ${containers} 2> /dev/null")
                    }
                //Networks    
                def nets = sh(scripts: "sudo docker network rm apinet pg_net",returnStdout: true).trim()
                if(nets != ""){
                    sh("sudo docker network rm ${nets}")
                }    
                //System    
                sh("sudo docker system prune --force")
                }
            }
        }

        stage('Kill IDS'){
            steps{
                script{
                    def jobs = sh(script: "jobs -p", returnStdout: true)
                    if(jobs != ""){
                    sh("sudo kill ${jobs}")
                    }
                }
            }
        }

        stage('Start DB'){
            steps{
                script{
                sh('sudo docker-compose -f /opt/DB_PG/docker-compose.yml up -d')
                }
            }
        }

        stage('Create Networks'){
            steps{
                script{
                sh 'sudo docker network create --subnet 172.18.0.0/24 --gateway 172.18.0.1 apinet'
                sh 'sudo docker network create --subnet 172.19.0.0/24 --gateway 172.19.0.1 pg_net'
            }
            }
        }

        stage('Build') {
            steps {
            script{
               def dockerBuildOutput = sh(script: 'sudo docker build . | grep Successfully', returnStdout: true, tty: false).trim()
               def imageShaMatch = dockerBuildOutput =~ /Successfully built ([a-f0-9]+)/
               IMAGE_SHA = imageShaMatch[0][1]
            }
         }
        }
        stage('Deploy') {
            steps {
                script{
                sh ("sudo docker run --network apinet -p 3001:3001 -d ${IMAGE_SHA}")
                }
            }
        }
    }
}