# Generated by Django 4.1.4 on 2022-12-23 18:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("chat", "0001_initial"),
    ]

    operations = [
        migrations.RemoveField(model_name="chat", name="completed",),
    ]
