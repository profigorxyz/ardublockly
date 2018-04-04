goog.provide('Blockly.Arduino.motors');

goog.require('Blockly.Arduino');

// DCMotor in AFMotor v1 with L293D
Blockly.Arduino['dc_afmotor_v1_init'] = function() {
  var dropdown_afmmotor = this.getFieldValue('AFMMOTOR');
  Blockly.Arduino.includes_['AFMotor.h'] = '#include <AFMotor.h>';
  Blockly.Arduino.definitions_[' AF_DCMotor dcmotor'+dropdown_afmmotor] = 'AF_DCMotor dcmotor'+dropdown_afmmotor+'('+dropdown_afmmotor+', MOTOR12_2KHZ);\n';
  var code = '';
  return code;
};

Blockly.Arduino['dc_afmotor_v1_config'] = function() {
  var dropdown_afmmotor = this.getFieldValue('AFMMOTOR');
  var dropdown_afmdir = this.getFieldValue('AFMDIR');
  var number_afmspeed = this.getFieldValue('AFMSPEED');

  Blockly.Arduino.includes_['AFMotor.h'] = '#include <AFMotor.h>';
  Blockly.Arduino.definitions_[' AF_DCMotor dcmotor'+dropdown_afmmotor] = 'AF_DCMotor dcmotor'+dropdown_afmmotor+'('+dropdown_afmmotor+', MOTOR12_2KHZ);\n';

  if(number_afmspeed>255){
    var number_afmspeed = 255;
  } else if (number_afmspeed<0) {
    var number_afmspeed = 0;
  }
  var code = 'dcmotor'+dropdown_afmmotor+'.setSpeed('+number_afmspeed+');\n';
     code += 'dcmotor'+dropdown_afmmotor+'.run('+dropdown_afmdir+');\n';
  return code;
};

Blockly.Arduino.stepper_AFMotor_v1 = function() {

//Définition variables
  var dropdown_stepperST1 = this.getFieldValue('STEPPERST1');
  var dropdown_directionST1 = this.getFieldValue('directionST1');
  var value_sprST1 = Blockly.Arduino.valueToCode(this, 'sprST1');
  var value_rpmST1 = Blockly.Arduino.valueToCode(this, 'rpmST1');
  var value_stepsST1 = Blockly.Arduino.valueToCode(this, 'stepsST1');

  Blockly.Arduino.definitions_['AFMotor.h'] = '#include <AFMotor.h>';

  Blockly.Arduino.definitions_['AF_Stepper motor' +dropdown_stepperST1] = 'AF_Stepper motor'+dropdown_stepperST1+'('+value_sprST1+','+dropdown_stepperST1+');\n';


  var code = 'motor'+dropdown_stepperST1+'.setSpeed('+value_rpmST1+');\n';
      code +=  'motor'+dropdown_stepperST1+'motor.step('+value_sprST1+','+dropdown_directionST1+', SINGLE);\n';

  return code;
};

Blockly.Arduino.arduino_s = function() {
   var dropdown_direction = this.getFieldValue('DIRECTION'); 
  var speedA = Blockly.Arduino.valueToCode(this, 'SPEEDA', Blockly.Arduino.ORDER_ATOMIC) || '127'
  var speedB = Blockly.Arduino.valueToCode(this, 'SPEEDB', Blockly.Arduino.ORDER_ATOMIC) || '127'
  Blockly.Arduino.setups_["setup_motor"] = "pinMode(12,OUTPUT);//directionPinA\n"+
  "  pinMode(13,OUTPUT);//directionPinB\n"+
  "  pinMode(10,OUTPUT);//speedPinA\n"+
  "  pinMode(11,OUTPUT);//speedPinB\n";
  var code = "";
  if(dropdown_direction==="forward"){
    Blockly.Arduino.definitions_['define_forward'] = "void forward(int MotA, int MotB)\n"+
"{\n"+
     "  analogWrite(10,MotA);//Motor A speed\n"+
     "  analogWrite(11,MotB);//Motor B speed\n"+
     "  digitalWrite(13,LOW);//turn DC Motor B (right) move clockwise\n"+
     "  digitalWrite(12,LOW);//turn DC Motor A (left) move clockwise\n"+
"}\n";
    code="forward("+speedA+", "+speedB+");\n";
  } else if (dropdown_direction==="right") {
    Blockly.Arduino.definitions_['define_right'] = "void right(int MotA, int MotB)\n"+
"{\n"+
     "  analogWrite(10,MotA);//Motor A speed\n"+
     "  analogWrite(11,MotB);//Motor B speed\n"+
     "  digitalWrite(13,HIGH);//turn DC Motor B (right) move clockwise\n"+
     "  digitalWrite(12,LOW);//turn DC Motor A (left) move anti-clockwise\n"+
"}\n\n";
    code="right("+speedA+", "+speedB+");\n";
  } else if (dropdown_direction==="left") {
    Blockly.Arduino.definitions_['define_left'] = "void left(int MotA, int MotB)\n"+
"{\n"+
     "  analogWrite(10,MotA);//Motor A speed\n"+
     "  analogWrite(11,MotB);//Motor B speed\n"+
     "  digitalWrite(13,LOW);//turn DC Motor B (right) move anticlockwise\n"+
     "  digitalWrite(12,HIGH);//turn DC Motor A (left) move clockwise\n"+
"}\n\n";
    code="left("+speedA+", "+speedB+");\n";
  } else if (dropdown_direction==="backward"){
    Blockly.Arduino.definitions_['define_backward'] = "void backward(int MotA, int MotB)\n"+
"{\n"+
     "  analogWrite(10,MotA);//Motor A speed\n"+
     "  analogWrite(11,MotB);//Motor B speed\n"+
     "  digitalWrite(13,HIGH);//turn DC Motor B (right) move anticlockwise\n"+
     "  digitalWrite(12,HIGH);//turn DC Motor A (left) move anticlockwise\n"+
"}\n\n";
    code="backward("+speedA+", "+speedB+");\n";
  } else if (dropdown_direction==="stop"){
    Blockly.Arduino.definitions_['define_stop'] = "void stop()\n"+
"{\n"+
     "  analogWrite(10,0);//Motor A speed\n"+
     "  analogWrite(11,0);//Motor B speed\n"+
"}\n\n"
    code="stop();\n";
  }
  return code;
};

// @pbra 20160613
Blockly.Arduino.l298n_motor_init = function() {
  var id = this.getFieldValue('L298_NAME');
  var PinEN = this.getFieldValue("PIN-EN");
  var PinIN1 = this.getFieldValue("PIN-IN1");
  var PinIN2 = this.getFieldValue("PIN-IN2");
  var mysetup = "";

  mysetup += "// pin assignation for L298N : " + id + "\n";
  mysetup += " pinMode("+PinIN1+",OUTPUT);//IN1_" + id +" Pin\n" ;
  mysetup += " pinMode("+PinIN2+",OUTPUT);//IN2_" + id +" Pin\n";
  mysetup += " pinMode("+PinEN+",OUTPUT);//PWM_" + id +" Pin\n" ;
  Blockly.Arduino.setups_["setup_l298n_motor" + id] = mysetup;
  Blockly.Arduino.definitions_["setup_l298n_motor" + id] = "// pin assignation for L298N : " + id + "\n"+
	"int l298n_" + id + "[3] = {"+PinEN+", "+PinIN1+", "+PinIN2+"};\n";
  var code = "";
  return code;
};

// @pbra 20160612
Blockly.Arduino.l298n_motor = function() {
  var dropdown_direction = this.getFieldValue('DIRECTION'); 
  var id = this.getFieldValue('L298_NAME');
  var speed = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC) || '127';

  var code = "";
  if(dropdown_direction==="forward"){
    Blockly.Arduino.definitions_['define_l298n_forward'] = "void l298n_forward(int speed,int Pins[3])\n"+
"{\n"+
     "  analogWrite(Pins[0],speed);//Motor speed\n"+
     "  digitalWrite(Pins[1],HIGH);//turn DC Motor move clockwise\n"+
     "  digitalWrite(Pins[2],LOW);//turn DC Motor move clockwise\n"+
"}\n";
    code="l298n_forward("+speed+", l298n_" + id + ");\n";
  } else if (dropdown_direction==="backward") {
    Blockly.Arduino.definitions_['define_l298n_backward'] = "void l298n_backward(int speed,int Pins[3])\n"+
"{\n"+
     "  analogWrite(Pins[0],speed);//Motor speed\n"+
     "  digitalWrite(Pins[1],LOW);//turn DC Motor move anti-clockwise\n"+
     "  digitalWrite(Pins[2],HIGH);//turn DC Motor move anti-clockwise\n"+
"}\n\n";
    code="l298n_backward("+speed+", l298n_" + id + ");\n";
  } else if (dropdown_direction==="stop"){
    Blockly.Arduino.definitions_['define_l298n_stop'] = "void l298n_stop(int Pins[3])\n"+
"{\n"+
     "  analogWrite(Pins[0],0);//Motor speed\n"+
     "  digitalWrite(Pins[1],LOW);//turn DC Motor off\n"+
     "  digitalWrite(Pins[2],LOW);//turn DC Motor off\n"+
"}\n\n";
    code="l298n_stop(l298n_" + id + ");\n";
  } else if (dropdown_direction==="brake"){
    Blockly.Arduino.definitions_['define_l298n_brake'] = "void l298n_brake(int Pins[3])\n"+
"{\n"+
     "  analogWrite(Pins[0],255);//Motor speed\n"+
     "  digitalWrite(Pins[1],LOW);//turn DC Motor off\n"+
     "  digitalWrite(Pins[2],LOW);//turn DC Motor off\n"+
"}\n\n";
    code="l298n_brake(l298n_" + id + ");\n";
  }
  return code;
};
