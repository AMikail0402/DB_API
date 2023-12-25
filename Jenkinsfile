pipeline {
    agent any
    environment {
        IMAGE_SHA = ''
    }
    stages {
        
        stage('Reset Workplace'){
            steps{
            script{
            sh('sudo /bash_scripts/clear.sh')
            def pid = sh(script: 'ps aux | grep 'java -jar jids-1.0-SNAPSHOT-jar-with-dependencies.jar 127.0.0.1' | awk '{print $2}'', returnStdout: true, tty: false).trim()
            sh('kill ${pid} 2> /dev/null')
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

        stage('Create Network'){
            steps{
                script{
                sh 'sudo docker network create --subnet 172.18.0.0/24 --gateway 172.18.0.1 apinet'
            }
            }
        }

        stage('Build') {
            steps {
            script{
               def dockerBuildOutput = sh(script: 'sudo docker build .', returnStdout: true, tty: false).trim()
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