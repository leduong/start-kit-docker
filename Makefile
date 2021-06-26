SHELL := /bin/bash

heroku:
	git push heroku master

up:
	docker-compose up -d

deploy:
	docker-compose build
	docker-compose up -d

down:
	docker-compose down