# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-06-13 11:42
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('amy', '0003_auto_20170613_2126'),
    ]

    operations = [
        migrations.RenameField(
            model_name='image',
            old_name='ImageSet',
            new_name='image_set',
        ),
        migrations.AlterField(
            model_name='image',
            name='img',
            field=models.ImageField(max_length=200, upload_to='amy/static/amy/image_sets/'),
        ),
    ]
