// source: wacca/common.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.mythos.wacca.v0.WaccaClearStatus', null, global);
goog.exportSymbol('proto.mythos.wacca.v0.WaccaJudge', null, global);
goog.exportSymbol('proto.mythos.wacca.v0.WaccaMusicDifficulty', null, global);
goog.exportSymbol('proto.mythos.wacca.v0.WaccaMusicScoreGrade', null, global);
goog.exportSymbol('proto.mythos.wacca.v0.WaccaPlayMode', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mythos.wacca.v0.WaccaClearStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mythos.wacca.v0.WaccaClearStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mythos.wacca.v0.WaccaClearStatus.displayName = 'proto.mythos.wacca.v0.WaccaClearStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mythos.wacca.v0.WaccaJudge = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mythos.wacca.v0.WaccaJudge, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mythos.wacca.v0.WaccaJudge.displayName = 'proto.mythos.wacca.v0.WaccaJudge';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mythos.wacca.v0.WaccaClearStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.mythos.wacca.v0.WaccaClearStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mythos.wacca.v0.WaccaClearStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mythos.wacca.v0.WaccaClearStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    isClear: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    isMissless: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    isFullCombo: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    isAllMarvelous: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    isGiveUp: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mythos.wacca.v0.WaccaClearStatus}
 */
proto.mythos.wacca.v0.WaccaClearStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mythos.wacca.v0.WaccaClearStatus;
  return proto.mythos.wacca.v0.WaccaClearStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mythos.wacca.v0.WaccaClearStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mythos.wacca.v0.WaccaClearStatus}
 */
proto.mythos.wacca.v0.WaccaClearStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsClear(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsMissless(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsFullCombo(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAllMarvelous(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsGiveUp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mythos.wacca.v0.WaccaClearStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mythos.wacca.v0.WaccaClearStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mythos.wacca.v0.WaccaClearStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mythos.wacca.v0.WaccaClearStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsClear();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getIsMissless();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getIsFullCombo();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getIsAllMarvelous();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getIsGiveUp();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional bool is_clear = 1;
 * @return {boolean}
 */
proto.mythos.wacca.v0.WaccaClearStatus.prototype.getIsClear = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mythos.wacca.v0.WaccaClearStatus} returns this
 */
proto.mythos.wacca.v0.WaccaClearStatus.prototype.setIsClear = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool is_missless = 2;
 * @return {boolean}
 */
proto.mythos.wacca.v0.WaccaClearStatus.prototype.getIsMissless = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mythos.wacca.v0.WaccaClearStatus} returns this
 */
proto.mythos.wacca.v0.WaccaClearStatus.prototype.setIsMissless = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool is_full_combo = 3;
 * @return {boolean}
 */
proto.mythos.wacca.v0.WaccaClearStatus.prototype.getIsFullCombo = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mythos.wacca.v0.WaccaClearStatus} returns this
 */
proto.mythos.wacca.v0.WaccaClearStatus.prototype.setIsFullCombo = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool is_all_marvelous = 4;
 * @return {boolean}
 */
proto.mythos.wacca.v0.WaccaClearStatus.prototype.getIsAllMarvelous = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mythos.wacca.v0.WaccaClearStatus} returns this
 */
proto.mythos.wacca.v0.WaccaClearStatus.prototype.setIsAllMarvelous = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool is_give_up = 5;
 * @return {boolean}
 */
proto.mythos.wacca.v0.WaccaClearStatus.prototype.getIsGiveUp = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mythos.wacca.v0.WaccaClearStatus} returns this
 */
proto.mythos.wacca.v0.WaccaClearStatus.prototype.setIsGiveUp = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mythos.wacca.v0.WaccaJudge.prototype.toObject = function(opt_includeInstance) {
  return proto.mythos.wacca.v0.WaccaJudge.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mythos.wacca.v0.WaccaJudge} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mythos.wacca.v0.WaccaJudge.toObject = function(includeInstance, msg) {
  var f, obj = {
    marvelous: jspb.Message.getFieldWithDefault(msg, 1, 0),
    great: jspb.Message.getFieldWithDefault(msg, 2, 0),
    good: jspb.Message.getFieldWithDefault(msg, 3, 0),
    miss: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mythos.wacca.v0.WaccaJudge}
 */
proto.mythos.wacca.v0.WaccaJudge.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mythos.wacca.v0.WaccaJudge;
  return proto.mythos.wacca.v0.WaccaJudge.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mythos.wacca.v0.WaccaJudge} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mythos.wacca.v0.WaccaJudge}
 */
proto.mythos.wacca.v0.WaccaJudge.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMarvelous(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGreat(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGood(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMiss(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mythos.wacca.v0.WaccaJudge.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mythos.wacca.v0.WaccaJudge.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mythos.wacca.v0.WaccaJudge} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mythos.wacca.v0.WaccaJudge.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarvelous();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getGreat();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getGood();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getMiss();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional int32 marvelous = 1;
 * @return {number}
 */
proto.mythos.wacca.v0.WaccaJudge.prototype.getMarvelous = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mythos.wacca.v0.WaccaJudge} returns this
 */
proto.mythos.wacca.v0.WaccaJudge.prototype.setMarvelous = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 great = 2;
 * @return {number}
 */
proto.mythos.wacca.v0.WaccaJudge.prototype.getGreat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.mythos.wacca.v0.WaccaJudge} returns this
 */
proto.mythos.wacca.v0.WaccaJudge.prototype.setGreat = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 good = 3;
 * @return {number}
 */
proto.mythos.wacca.v0.WaccaJudge.prototype.getGood = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.mythos.wacca.v0.WaccaJudge} returns this
 */
proto.mythos.wacca.v0.WaccaJudge.prototype.setGood = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 miss = 4;
 * @return {number}
 */
proto.mythos.wacca.v0.WaccaJudge.prototype.getMiss = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.mythos.wacca.v0.WaccaJudge} returns this
 */
proto.mythos.wacca.v0.WaccaJudge.prototype.setMiss = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * @enum {number}
 */
proto.mythos.wacca.v0.WaccaMusicDifficulty = {
  WACCA_MUSIC_DIFFICULTY_UNSPECIFIED: 0,
  WACCA_MUSIC_DIFFICULTY_NORMAL: 1,
  WACCA_MUSIC_DIFFICULTY_HARD: 2,
  WACCA_MUSIC_DIFFICULTY_EXPERT: 3,
  WACCA_MUSIC_DIFFICULTY_INFERNO: 4
};

/**
 * @enum {number}
 */
proto.mythos.wacca.v0.WaccaMusicScoreGrade = {
  WACCA_MUSIC_SCORE_GRADE_UNSPECIFIED: 0,
  WACCA_MUSIC_SCORE_GRADE_D: 1,
  WACCA_MUSIC_SCORE_GRADE_C: 2,
  WACCA_MUSIC_SCORE_GRADE_B: 3,
  WACCA_MUSIC_SCORE_GRADE_A: 4,
  WACCA_MUSIC_SCORE_GRADE_AA: 5,
  WACCA_MUSIC_SCORE_GRADE_AAA: 6,
  WACCA_MUSIC_SCORE_GRADE_S: 7,
  WACCA_MUSIC_SCORE_GRADE_S_PLUS: 8,
  WACCA_MUSIC_SCORE_GRADE_SS: 9,
  WACCA_MUSIC_SCORE_GRADE_SS_PLUS: 10,
  WACCA_MUSIC_SCORE_GRADE_SSS: 11,
  WACCA_MUSIC_SCORE_GRADE_SSS_PLUS: 12,
  WACCA_MUSIC_SCORE_GRADE_MASTER: 13
};

/**
 * @enum {number}
 */
proto.mythos.wacca.v0.WaccaPlayMode = {
  WACCA_PLAY_MODE_UNSPECIFIED: 0,
  WACCA_PLAY_MODE_SINGLE: 1,
  WACCA_PLAY_MODE_VERSUS: 2,
  WACCA_PLAY_MODE_CO_OP: 3
};

goog.object.extend(exports, proto.mythos.wacca.v0);