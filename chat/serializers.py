#serializers to convert to convert model instances to JSON
#so that the frontend can work with received data

from rest_framework import serializers
from .models import Chat

#define API representation
class ChatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chat
        fields = ('id','patient_id','patient_name','email','phone_num','symptoms','diagnosis')