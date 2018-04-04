 goog.provide('Blockly.Blocks.motors');

 goog.require('Blockly.Blocks');
 goog.require('Blockly.Types');

Blockly.Blocks.motors.HUE = 20;

// DC AFMotor v1
Blockly.Blocks['dc_afmotor_v1_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_MOTORS_DC);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_MOTORS_CON)
        .appendField(
          new Blockly.FieldDropdown([
            ["M1","1"],
            ["M2","2"],
            ["M3","3"],
            ["M4","4"]
          ]),
        "AFMMOTOR");
    this.setColour(Blockly.Blocks.motors.HUE);
 this.setTooltip(Blockly.Msg.ARD_MOTORS_AFDC);
 this.setHelpUrl("https://www.adafruit.com/products/81");
  }
};
Blockly.Blocks['dc_afmotor_v1_config'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_MOTORS_DC)
        .appendField(
          new Blockly.FieldDropdown([
            ["M1","1"],
            ["M2","2"],
            ["M3","3"],
            ["M4","4"]
          ]),
        "AFMMOTOR");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_MOTORS_DIR)
        .appendField(
          new Blockly.FieldDropdown([
            [Blockly.Msg.ARD_MOTORS_F,"FORWARD"],
            [Blockly.Msg.ARD_MOTORS_B,"BACKWARD"],
            [Blockly.Msg.ARD_MOTORS_S,"RELEASE"]
          ]),
        "AFMDIR");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_MOTORS_DC_SPEED)
        .appendField(new Blockly.FieldNumber(255, 0, 255, 1), "AFMSPEED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.motors.HUE);
 this.setTooltip(Blockly.Msg.ARD_MOTORS_AFDC);
 this.setHelpUrl("https://www.adafruit.com/products/81");
  }
};
// Stepper AFMotor v1
Blockly.Blocks['stepper_AFMotor_v1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_MOTORS_STEPPER);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_MOTORS_CON)
        .appendField(new Blockly.FieldDropdown([["M1", "1"], ["M2", "2"]]), 'STEPPERST1');
    this.appendValueInput('sprST1')
        .setCheck(Blockly.Types.NUMBER.output)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_MOTORS_STEPPER_SPR);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_MOTORS_DIR)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ARD_MOTORS_F, "FORWARD"], [Blockly.Msg.ARD_MOTORS_B, "BACKWARD"], 'directionST1']));
    this.appendValueInput('rpmST1')
        .setCheck(Blockly.Types.NUMBER.output)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_MOTORS_STEPPER_RPM);
    this.appendValueInput('stepsST1')
        .setCheck(Blockly.Types.NUMBER.output)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_MOTORS_STEPPER_STEPS);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.motors.HUE);
    this.setTooltip(Blockly.Msg.ARD_MOTORS_AFST);
    this.setHelpUrl('https://www.adafruit.com/products/81');
  },
  /** @return {string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }
};

Blockly.Blocks['arduino_s'] = {
   init: function() {
	this.setHelpUrl('https://www.sparkfun.com/datasheets/DevTools/Arduino/Ardumoto_v13.pdf');
    this.setColour(Blockly.Blocks.motors.HUE);
	this.setInputsInline(false) ; 
	this.appendDummyInput()
		.appendField(Blockly.Msg.ARD_MOTORS_298SHIELD_TITLE)
        .appendField(
				new Blockly.FieldDropdown([
						[ Blockly.Msg.ARD_MOTORS_S, "stop" ],
						[ Blockly.Msg.ARD_MOTORS_F, "forward" ],
						[ Blockly.Msg.ARD_MOTORS_R, "right" ],
						[ Blockly.Msg.ARD_MOTORS_L, "left" ],
						[ Blockly.Msg.ARD_MOTORS_B, "backward" ] ]),
				"DIRECTION");
   this.setInputsInline(true) ; 
   this.appendValueInput("SPEEDA")
       .setCheck(Blockly.Types.NUMBER.output)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_MOTORS_DC_SPEEDA);
	this.appendValueInput("SPEEDB")
        .setCheck(Blockly.Types.NUMBER.output)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_MOTORS_DC_SPEEDB);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROBOTS_MOTORS_ARDUNIO_S_TOOLTIP);
  },
  /** @return {string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }
};

//@pbra 20160613
Blockly.Blocks['l298n_motor_init'] = {
  init: function() {
    this.setColour(Blockly.Blocks.motors.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARD_MOTORS_298N_INI_TITLE);
    this.appendDummyInput("")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ARD_MOTORS_298N_ID)
      .appendField(new Blockly.FieldInstance('L298_ID', 'L298_ID', false, false, false), 'L298_NAME');
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARD_MOTORS_298N_EN)
      .appendField(new Blockly.FieldTextInput('0',  Blockly.Arduino.pinPWMValidator), 'PIN-EN')
      .setAlign(Blockly.ALIGN_RIGHT);
  this.appendDummyInput()
      .appendField(Blockly.Msg.ARD_MOTORS_298N_MAD)
      .appendField(new Blockly.FieldTextInput('0',  Blockly.Arduino.pinDualValidator), 'PIN-IN1')
      .appendField(Blockly.Msg.ARD_MOTORS_298N_MAD)
      .appendField(new Blockly.FieldTextInput('0',  Blockly.Arduino.pinDualValidator), 'PIN-IN2')
      .setAlign(Blockly.ALIGN_RIGHT);
this.setInputsInline(false);
this.setPreviousStatement(true, null);
this.setNextStatement(true, null);
this.setTooltip(Blockly.Msg.ARD_MOTORS_298N_INI_TITLE);
  }
};


//@pbra 20160613
Blockly.Blocks['l298n_motor'] = {
  init: function() {
    this.setColour(Blockly.Blocks.motors.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.ARD_MOTORS_298N_TITLE)
		.appendField(
				new Blockly.FieldDropdown([
						[ Blockly.Msg.ARD_MOTORS_S, "stop" ],
						[ Blockly.Msg.ARD_MOTORS_F, "forward" ],
						[ Blockly.Msg.ARD_MOTORS_B, "backward" ],
						[ Blockly.Msg.ARD_MOTORS_BR, "brake" ] ]),
				"DIRECTION");
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_MOTORS_298N_ID)
        .appendField(new Blockly.FieldInstance('L298_ID', 'L298_ID', false, false, false), 'L298_NAME');
    this.appendValueInput("SPEED", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_MOTORS_DC_SPEED);
	this.setInputsInline(false);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setTooltip(Blockly.Msg.ARD_MOTORS_298N_TITLE);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.
    var instanceName = this.getFieldValue('L298_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'L298_ID', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid config block
      this.setWarningText(
        Blockly.Msg.COMPONENT_WARN.replace(
            //'%1', Blockly.Msg.SERVO_COMPONENT).replace(
            '%1', '').replace(
                '%2', instanceName));
    }
  }
};

