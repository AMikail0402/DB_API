pipeline {
    agent any

    stages {

        stage('Create Network'){
            steps{script{
                sh 'sudo docker network create --subnet 172.18.0.0/24 --gateway 172.18.0.1 apinet'
            }
            }
        }

        stage('Build') {
            steps {
            script{
               def dockerBuildOutput = sh(script: 'sudo docker build .', returnStdout: true, tty: false).trim()
               def imageShaMatch = dockerBuildOutput =~ /Successfully built ([a-f0-9]+)/
               def imageSha = imageShaMatch[0][1]
            }
         }
        }
        stage('Deploy') {
            steps {
                script{
                sh ("sudo docker run --network apinet -p 3001:3001 -d ${imageSha}")
                }
            }
        }
    }
}