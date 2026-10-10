var APP_DATA = {
  "scenes": [
    {
      "id": "0-front-exterior-1",
      "name": "Front Exterior 1",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3483902604801417
      },
      "linkHotspots": [
        {
          "yaw": 0.13768750852678657,
          "pitch": 0.14251846727590767,
          "rotation": 0,
          "target": "1-front-exterior-2"
        },
        {
          "yaw": 0.8642114158031546,
          "pitch": 0.11399975423263342,
          "rotation": 4.71238898038469,
          "target": "2-southeast-view"
        },
        {
          "yaw": -0.8849322743478663,
          "pitch": 0.07862076279448615,
          "rotation": 7.853981633974483,
          "target": "3-southwest-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-front-exterior-2",
      "name": "Front Exterior 2",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6394134832842724,
          "pitch": 0.1588631599140129,
          "rotation": 4.71238898038469,
          "target": "2-southeast-view"
        },
        {
          "yaw": -1.4143079408474222,
          "pitch": 0.08378949841504735,
          "rotation": 1.5707963267948966,
          "target": "3-southwest-view"
        },
        {
          "yaw": 3.074823033567025,
          "pitch": 0.2973131019758526,
          "rotation": 3.141592653589793,
          "target": "0-front-exterior-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-southeast-view",
      "name": "Southeast View",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.09221302013883026,
        "pitch": -0.0660225339031939,
        "fov": 0.7117559781506009
      },
      "linkHotspots": [
        {
          "yaw": -0.5542519417380269,
          "pitch": 0.11973552177026292,
          "rotation": 7.853981633974483,
          "target": "1-front-exterior-2"
        },
        {
          "yaw": 0.7213863349701146,
          "pitch": 0.08505732019652967,
          "rotation": 4.71238898038469,
          "target": "9-right-exterior"
        },
        {
          "yaw": -0.8111949806600229,
          "pitch": 0.047020034416419776,
          "rotation": 1.5707963267948966,
          "target": "3-southwest-view"
        },
        {
          "yaw": -1.2727033231894058,
          "pitch": 0.16531267364797486,
          "rotation": 1.5707963267948966,
          "target": "0-front-exterior-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-southwest-view",
      "name": "Southwest View",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.864873976685832,
          "pitch": 0.14704754900490258,
          "rotation": 4.71238898038469,
          "target": "1-front-exterior-2"
        },
        {
          "yaw": 1.5835027235637575,
          "pitch": 0.14237070392008278,
          "rotation": 4.71238898038469,
          "target": "0-front-exterior-1"
        },
        {
          "yaw": 1.1177148385988005,
          "pitch": 0.041769023868120314,
          "rotation": 4.71238898038469,
          "target": "2-southeast-view"
        },
        {
          "yaw": -1.6237576783675358,
          "pitch": 0.07932261059836776,
          "rotation": 1.5707963267948966,
          "target": "4-left-exterior-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-left-exterior-1",
      "name": "Left Exterior 1",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.09340063050372649,
        "pitch": -0.03647433039965442,
        "fov": 0.713282308472053
      },
      "linkHotspots": [
        {
          "yaw": 0.7457986817122872,
          "pitch": 0.07247159864770225,
          "rotation": 4.71238898038469,
          "target": "1-front-exterior-2"
        },
        {
          "yaw": 1.0445902580932582,
          "pitch": 0.058725673638869935,
          "rotation": 4.71238898038469,
          "target": "0-front-exterior-1"
        },
        {
          "yaw": -1.4828276558722973,
          "pitch": 0.09828465942814901,
          "rotation": 1.5707963267948966,
          "target": "5-left-exterior-2"
        },
        {
          "yaw": -1.0513224448988545,
          "pitch": 0.03498703896690003,
          "rotation": 7.853981633974483,
          "target": "6-northwest-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-left-exterior-2",
      "name": "Left Exterior 2",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.7693347560983188
      },
      "linkHotspots": [
        {
          "yaw": 1.2242785255976578,
          "pitch": 0.09150458050135413,
          "rotation": 4.71238898038469,
          "target": "4-left-exterior-1"
        },
        {
          "yaw": -1.2795947447344531,
          "pitch": 0.09892370374313231,
          "rotation": 1.5707963267948966,
          "target": "6-northwest-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-northwest-view",
      "name": "Northwest View",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.7555060386574988
      },
      "linkHotspots": [
        {
          "yaw": 1.2563202255146741,
          "pitch": 0.09395707924592145,
          "rotation": 4.71238898038469,
          "target": "5-left-exterior-2"
        },
        {
          "yaw": 0.9289430218664521,
          "pitch": 0.06059820455189069,
          "rotation": 4.71238898038469,
          "target": "4-left-exterior-1"
        },
        {
          "yaw": -1.2780470620010789,
          "pitch": 0.1155332528492945,
          "rotation": 1.5707963267948966,
          "target": "8-rear-exterior-"
        },
        {
          "yaw": -0.8589184694332488,
          "pitch": 0.036141069698235384,
          "rotation": 1.5707963267948966,
          "target": "7-northeast-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-northeast-view",
      "name": "Northeast View",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.7588697176427258
      },
      "linkHotspots": [
        {
          "yaw": 1.008257143656163,
          "pitch": 0.1095841444754857,
          "rotation": 4.71238898038469,
          "target": "8-rear-exterior-"
        },
        {
          "yaw": 0.6618667335327011,
          "pitch": 0.03702223164349938,
          "rotation": 4.71238898038469,
          "target": "6-northwest-view"
        },
        {
          "yaw": -1.0468674301646672,
          "pitch": 0.0396298316116912,
          "rotation": 1.5707963267948966,
          "target": "9-right-exterior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-rear-exterior-",
      "name": "Rear Exterior ",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.00479050036103601,
        "pitch": -0.11253291663174991,
        "fov": 1.3090975325181604
      },
      "linkHotspots": [
        {
          "yaw": 1.3170119027092646,
          "pitch": 0.08034777587834796,
          "rotation": 4.71238898038469,
          "target": "6-northwest-view"
        },
        {
          "yaw": -1.6205113723555016,
          "pitch": 0.07417714305823253,
          "rotation": 1.5707963267948966,
          "target": "7-northeast-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-right-exterior",
      "name": "Right Exterior",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.0038553586486749225,
        "pitch": 0.022112142946015823,
        "fov": 0.764207660107604
      },
      "linkHotspots": [
        {
          "yaw": 1.1528626386062744,
          "pitch": 0.09533043461086699,
          "rotation": 4.71238898038469,
          "target": "7-northeast-view"
        },
        {
          "yaw": -1.3174062854489605,
          "pitch": 0.030421357724591758,
          "rotation": 1.5707963267948966,
          "target": "2-southeast-view"
        },
        {
          "yaw": 0.7024971677542524,
          "pitch": 0.012467123580398365,
          "rotation": 4.71238898038469,
          "target": "8-rear-exterior-"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Oaklea_360Showcase",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
