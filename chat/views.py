from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ChatSerializer
from .models import Chat
# Create your views here.
#define the view behavior
class ChatView(viewsets.ModelViewSet):
    serializer_class = ChatSerializer
    queryset = Chat.objects.all()

def index(request):
    return render(request, "build/index.html")
