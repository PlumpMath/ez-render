/**
 * Created by vik on 17/01/2015.
 *
 *
 *    dependencies: gl-matrix.js, litegl.js
 */


var EZ = EZ || {};


/* consts ************/
EZ.ZERO = vec3.fromValues(0,0,0);
EZ.LEFT = vec3.fromValues(1,0,0);
EZ.UP = vec3.fromValues(0,1,0);
EZ.FRONT = vec3.fromValues(0,0,1);
EZ.WHITE = vec3.fromValues(1,1,1);
EZ.BLACK = vec3.fromValues(0,0,0);

/* Temporary containers ************/
EZ.temp_mat4 = mat4.create();
EZ.temp_vec2 = vec3.create();
EZ.temp_vec3 = vec3.create();
EZ.temp_vec4 = vec3.create();
EZ.temp_quat = quat.create();