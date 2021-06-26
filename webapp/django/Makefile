SHELL := /bin/bash

install: ## install basic environment requirements
	pip install -r requirements.txt

activate:
	source .venv/bin/activate

run:
	python manage.py runserver

migration:
	python manage.py makemigrations

migrate:
	python manage.py migrate

superuser:
	python manage.py createsuperuser

heroku:
	git push heroku master

deploy:
	docker-compose build
	docker-compose up -d

down:
	docker-compose down