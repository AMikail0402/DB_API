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
               def dockerBuildOutput = sh(script: 'sudo docker build .', returnStdout: true).trim()
               def imageSha = dockerBuildOutput =~ /Successfully built ([a-f0-9]+)/
               sh("echo ${imageSha}")
            }
         }
        }
        stage('Deploy') {
            steps {
                script{
                sh 'echo deploy'
                }
            }
        }
    }
}