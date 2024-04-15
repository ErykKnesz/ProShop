import inspect
from django.contrib import admin
from . import models

#admin.site.register(Product)

for name, obj in inspect.getmembers(models):
    if inspect.isclass(obj) and name != 'User':
        admin.site.register(obj)
