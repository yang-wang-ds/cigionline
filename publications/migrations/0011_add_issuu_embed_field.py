# Generated by Django 3.1.4 on 2020-12-14 21:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('publications', '0010_add_more_publication_page_fields'),
    ]

    operations = [
        migrations.AddField(
            model_name='publicationpage',
            name='embed_issuu',
            field=models.URLField(blank=True, help_text='Enter the ISSUU document URL (https://www.issuu.com/cigi/docs/saferinternet_paper_no_1_dec4_abhi)', verbose_name='ISSUU Embed'),
        ),
    ]
