from email.policy import default
import uuid
from wsgiref.handlers import format_date_time
from django.db import models

# Create your models here.
class Chat(models.Model):
    #primary key, id
    id = models.AutoField(primary_key=True)
    #unique id for each patient entry, used to protect patient's personal info
    patient_id = models.UUIDField(primary_key=False, default=uuid.uuid4, editable=False)
    patient_name = models.CharField(max_length=120)
    email = models.EmailField()
    phone_num = models.CharField(max_length=14, blank=True)
    symptoms = models.CharField(max_length=1000)
    diagnosis = models.TextField(blank=True)

  

    def _str_(self):
        return self.id
