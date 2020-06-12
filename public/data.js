var APP_DATA = {
  "scenes": [
    {
      "id": "0-common-space",
      "name": "common space",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5889809552754883,
          "pitch": 0.0637123033930429,
          "rotation": 0,
          "target": "2-entrance_counter"
        },
        {
          "yaw": 2.572587140650443,
          "pitch": 0.0742548154121927,
          "rotation": 0,
          "target": "1-family-space"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-family-space",
      "name": "family space",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.43429418786943685,
          "pitch": 0.013299214760603917,
          "rotation": 0,
          "target": "0-common-space"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-entrance_counter",
      "name": "entrance_counter",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6206901191830916,
          "pitch": 0.15501701670286927,
          "rotation": 0,
          "target": "0-common-space"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
