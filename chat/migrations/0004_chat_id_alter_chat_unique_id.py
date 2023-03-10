# Generated by Django 4.1.4 on 2022-12-23 19:44

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ("chat", "0003_rename_id_chat_unique_id_alter_chat_name_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="chat",
            name="id",
            field=models.AutoField(default=0, primary_key=True, serialize=False),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name="chat",
            name="unique_id",
            field=models.UUIDField(default=uuid.uuid4, editable=False),
        ),
    ]
