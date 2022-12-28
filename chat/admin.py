from django.contrib import admin
from .models import Chat
class ChatAdmin(admin.ModelAdmin):
    list_display=('id','patient_id','patient_name','email','phone_num','symptoms','diagnosis')
# Register your models here.
admin.site.register(Chat,ChatAdmin)