from rest_framework import serializers

from core.models import Snapshot

class SnapshotSerializer(serializers.ModelSerializer):
    class Meta():
        model = Snapshot
        fields = ('name', 'theme', 'snapshot')