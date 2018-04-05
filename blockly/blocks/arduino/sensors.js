goog.provide('Blockly.Blocks.robot_sensors');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks.robot_sensors.HUE = 285;

Blockly.Blocks["sonar"] = {
  init: function() {
    this.setColour(Blockly.Blocks.robot_sensors.HUE);
    this.setHelpUrl('http://www.gotronic.fr/art-module-de-detection-us-hc-sr04-20912.htm');
    this.appendDummyInput('PINS')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_SENSORS_SONAR_TPIN)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'TRIGER')
        .appendField(Blockly.Msg.ARD_SENSORS_SONAR_EPIN)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'DIST');
    this.setOutput(true, Blockly.Types.NUMBER.output);
    this.setTooltip(' ');
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function() {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(this, 'TRIGER', 'digitalPins');
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(this, 'DIST', 'digitalPins');
  },
  /** @return {!string} The type of input value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }
};
Blockly.Blocks['isblack'] = {
  init: function() {
    this.setColour(Blockly.Blocks.robot_sensors.HUE);
    this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:lig1');
    this.appendDummyInput('PIN')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_SENSORS_ISBLACK_PIN)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'DPIN');
    this.setInputsInline(true);
    this.setOutput(true, Blockly.Types.NUMBER.output);
    this.setTooltip(' ');
  },
  /** @return {string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function() {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(this, 'DPIN', 'digitalPins');
  }
};