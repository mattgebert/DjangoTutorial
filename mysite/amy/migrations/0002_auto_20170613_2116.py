# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-06-13 11:16
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('amy', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='image',
            old_name='image',
            new_name='img',
        ),
        migrations.AddField(
            model_name='image',
            name='descrption',
            field=models.CharField(default=0, max_length=200),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='image',
            name='name',
            field=models.CharField(default=0, max_length=200),
            preserve_default=False,
        ),
    ]
