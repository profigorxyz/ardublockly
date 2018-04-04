goog.provide('Blockly.Blocks.robot_sensors');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks.robot_sensors.HUE = 285;

Blockly.Blocks["sonar"] = {
  init: function() {
    this.setColour(Blockly.Blocks.robot_sensors.HUE);
    this.setHelpUrl('http://www.gotronic.fr/art-module-de-detection-us-hc-sr04-20912.htm');
    this.appendValueInput('TRIGER')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .setAlign(Blockly.ALIGN_RIGHT)// error here?
        .appendField(Blockly.Msg.ARD_SENSORS_SONAR_TPIN);
    this.appendValueInput('DIST')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .setAlign(Blockly.ALIGN_RIGHT)//or here
        .appendField(Blockly.Msg.ARD_SENSORS_SONAR_EPIN);
    this.setOutput(true, Blockly.Types.NUMBER.output);
    this.setTooltip(' ');
  },
  /** @return {string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }
};
Blockly.Blocks['isblack'] = {
  init: function() {
    this.setColour(Blockly.Blocks.robot_sensors.HUE);
    this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:lig1');
    this.appendValueInput('PIN')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .setAlign(Blockly.ALIGN_RIGHT)// i dont think its here
        .appendField(Blockly.Msg.ARD_SENSORS_ISBLACK_PIN);
    this.setInputsInline(true);
    this.setOutput(true, Blockly.Types.BOOLEAN.output);
    this.setTooltip(' ');
  },
  /** @return {string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.BOOLEAN;
  },
  /** @return {string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }
};