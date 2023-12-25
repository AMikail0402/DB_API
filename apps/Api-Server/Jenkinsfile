pipeline {
    agent any

    stages {

        stage('Create Network'){
            steps{
                sh 'docker network create --subnet 172.18.0.0/24 --gateway 172.18.0.1 apinet'
            }
        }

        stage('Build') {
            steps {
               def dockerBuildOutput = sh(script: 'docker build .', returnStdout: true).trim()
               dockerBuildOutput = /Successfully built ([a-f0-9]+)/
               sh("echo ${dockerBuildOutput}")
            }
        }
        stage('Deploy') {
            steps {
                sh 'mvn test'
            }
        }
    }
}