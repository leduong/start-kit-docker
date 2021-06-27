# Start-kit with Docker Swarm

## Install Docker and docker-compose and Kubernetes

### Ubuntu 20+ and turn off SWAP

```
sudo swapoff -a && sudo sed -i '/ swap / s/^\(.*\)$/#\1/g' /etc/fstab
sudo apt update
sudo apt install docker.io docker-compose make
sudo snap install code --classic
```


### How to Start

```
# Start docker
$ make up

# Stop docker
$ make down

# Deploy heroku
$ make heroku
```