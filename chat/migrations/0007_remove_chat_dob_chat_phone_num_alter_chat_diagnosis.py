# Generated by Django 4.1.4 on 2022-12-27 16:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("chat", "0006_rename_name_chat_patient_name_alter_chat_diagnosis"),
    ]

    operations = [
        migrations.RemoveField(model_name="chat", name="dob",),
        migrations.AddField(
            model_name="chat",
            name="phone_num",
            field=models.CharField(blank=True, max_length=12),
        ),
        migrations.AlterField(
            model_name="chat", name="diagnosis", field=models.TextField(blank=True),
        ),
    ]
