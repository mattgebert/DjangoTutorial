# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-06-13 11:26
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('amy', '0002_auto_20170613_2116'),
    ]

    operations = [
        migrations.RenameField(
            model_name='image',
            old_name='descrption',
            new_name='description',
        ),
    ]
