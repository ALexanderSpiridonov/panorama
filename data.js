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
          "yaw": 2.5969730365762675,
          "pitch": 0.10022737943106996,
          "rotation": 0,
          "target": "1-family-space"
        },
        {
          "yaw": -0.6192694940571979,
          "pitch": 0.06320345182590259,
          "rotation": 0,
          "target": "2-counter"
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
          "yaw": 0.485110157767064,
          "pitch": 0.013754657195164555,
          "rotation": 0,
          "target": "0-common-space"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-counter",
      "name": "counter",
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
          "yaw": 1.720121278265358,
          "pitch": 0.09451884104714736,
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
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
