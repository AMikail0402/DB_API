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
                def pg_net = sh(script: " sudo docker network ls | grep pg_net | awk '{print \$1}' ",returnStdout: true).trim()
                def apinet = sh(script: " sudo docker network ls | grep apinet | awk '{print \$1}' ",returnStdout: true).trim()
                sh("echo 'Das PG-Network${pg_net}'")
                sh("echo 'Das API-Network${apinet}'")
                if(pg_net != ""){
                    sh("sudo docker network rm ${pg_net}")
                }
                if(apinet != ""){
                    sh("sudo docker network rm ${apinet}")
                }    
                //System    
                sh("sudo docker system prune --force")
                }
            }
        }

        stage('Kill IDS'){
            steps{
                script{
                    def idsProcesses = sh(script: "ps aux | grep 'java -jar jids-1.0-SNAPSHOT-jar-with-dependencies.jar' | grep -v grep | awk '{print \$2}'",returnStdout: true).trim()
                    sh("echo 'unsere Prozesse ${idsProcesses}'")
                    if(idsProcesses != ""){
                    sh("sudo kill ${idsProcesses}")
                    }
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


        stage('Start DB'){
            steps{
                script{
                sh('sudo docker-compose -f /opt/DB_PG/docker-compose.yml up -d')
                }
            }
        }

        stage('Build API') {
            steps {
            script{
               def dockerBuildOutput = sh(script: 'sudo docker build . | grep Successfully', returnStdout: true, tty: false).trim()
               def imageShaMatch = dockerBuildOutput =~ /Successfully built ([a-f0-9]+)/
               IMAGE_SHA = imageShaMatch[0][1]
            }
         }
        }
        stage('Deploy API') {
            steps {
                script{
                sh ("sudo docker run --network apinet -p 3001:3001 -d ${IMAGE_SHA}")
                }
            }
        }
    }
}