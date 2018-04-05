goog.provide('Blockly.Arduino.robot_sensors');

goog.require('Blockly.Arduino');

Blockly.Arduino["sonar"] = function(block) {
  var pins = [block.getFieldValue('TRIGER'),
              block.getFieldValue('DIST')];
  Blockly.Arduino.definitions_['define_mesure_distance_cm'] = "#include <NewPing.h>\n"+
  "#define TRIGGER_PIN "+pins[0]+" // Arduino pin tied to trigger pin on the ultrasonic sensor.\n"+
  "#define ECHO_PIN "+pins[1]+" // Arduino pin tied to echo pin on the ultrasonic sensor.\n"+
  "#define MAX_DISTANCE 200 // Maximum distance we want to ping for (in centimeters). Maximum sensor distance is rated at 400-500cm.\n"+
  "\nNewPing sonar(TRIGGER_PIN, ECHO_PIN, MAX_DISTANCE); // NewPing setup of pins and maximum distance.\n"+
    "int distance_cm()\n"+
    "{\n"+
    "  int value = sonar.ping_cm();\n"+
    "  if (value == 0) { value=1000; }\n"+
    "  delay(50);\n"+
    "  return value;\n"+
    "}";
  var code = 'distance_cm()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['isblack'] = function(block) {
  var dropdown_pin = block.getFieldValue('DPIN');///Blockly.Arduino.valueToCode(this, 'DPIN', Blockly.Arduino.ORDER_ATOMIC);;
  Blockly.Arduino.setups_['setup_lig1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==1';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
