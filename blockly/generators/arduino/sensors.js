goog.provide('Blockly.Arduino.robot_sensors');

goog.require('Blockly.Arduino');

Blockly.Arduino["sonar"] = function() {
  var dropdown_triger_pin = Blockly.Arduino.valueToCode(this, 'TRIGER', Blockly.Arduino.ORDER_ATOMIC); 
  var dropdown_dist_pin = Blockly.Arduino.valueToCode(this, 'DIST', Blockly.Arduino.ORDER_ATOMIC); 
  Blockly.Arduino.definitions_['define_mesure_distance_cm'] = "int distance_cm(byte trig_pin,byte dist_pin)\n"+
    "{\n"+
    "  digitalWrite(trig_pin,HIGH);\n"+
    "  delayMicroseconds(100);\n"+
    "  digitalWrite(trig_pin,LOW);\n"+
    "  int value = (pulseIn(dist_pin,HIGH)/2)/29.1+2;\n"+
    "  if (value>255) { value=255; }\n"+
    "  delay(50);\n"+
    "  return value;\n"+
    "}";
  Blockly.Arduino.setups_['setup_sonar_' + dropdown_triger_pin] = 'pinMode('+dropdown_triger_pin+',OUTPUT);//Sonar triger pin\n'
  + '  pinMode('+dropdown_dist_pin+',INPUT);//Sonar distance pulse pin';
  var code = 'distance_cm('+dropdown_triger_pin+','+dropdown_dist_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['isblack'] = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);;
  Blockly.Arduino.setups_['setup_lig1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==1';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
