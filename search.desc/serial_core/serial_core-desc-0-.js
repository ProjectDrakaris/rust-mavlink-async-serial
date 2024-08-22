searchState.loadedDescShard("serial_core", 0, "110 baud.\n115,200 baud.\n1200 baud.\n19,200 baud.\n2400 baud.\n300 baud.\n38,400 baud.\n4800 baud.\n57,600 baud.\n600 baud.\n9600 baud.\nNon-standard baud rates.\nSerial port baud rates.\n5 bits per character.\n6 bits per character.\n7 bits per character.\n8 bits per character.\nNumber of bits per character.\nContains the error value\nAn error type for serial port operations.\nCategories of errors that can occur when interacting with …\nFlow control modes.\nFlow control using RTS/CTS signals.\nNo flow control.\nFlow control using XON/XOFF bytes.\nA parameter was incorrect.\nAn I/O error occured.\nThe device is not available.\nContains the success value\nParity checking modes.\nParity bit sets even number of 1 bits.\nNo parity bit.\nParity bit sets odd number of 1 bits.\nA device-indepenent implementation of serial port settings.\nA type for results generated by interacting with serial …\nA trait for implementing serial devices.\nA trait for serial port devices.\nA trait for objects that implement serial port …\nA type that implements the settings for the serial port …\nOne stop bit.\nTwo stop bits.\nNumber of stop bits.\nReturns the current baud rate.\nBaud rate.\nReturns the character size.\nCharacter size.\nConfigures a serial port device.\nReturns the flow control mode.\nFlow control mode.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates a <code>BaudRate</code> for a particular speed.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the corresponding <code>ErrorKind</code> for this error.\nReturns the parity-checking mode.\nParity checking mode.\nA module that exports traits that are useful to have in …\nReads the state of the CD (Carrier Detect) control signal.\nReads the state of the CD (Carrier Detect) control signal.\nReads the state of the CTS (Clear To Send) control signal.\nReads the state of the CTS (Clear To Send) control signal.\nReads the state of the DSR (Data Set Ready) control signal.\nReads the state of the DSR (Data Set Ready) control signal.\nReads the state of the RI (Ring Indicator) control signal.\nReads the state of the RI (Ring Indicator) control signal.\nReturns the device’s current settings.\nAlter the serial port’s configuration.\nSets the baud rate.\nSets the character size.\nSets the state of the DTR (Data Terminal Ready) control …\nSets the state of the DTR (Data Terminal Ready) control …\nSets the flow control mode.\nSets the parity-checking mode.\nSets the state of the RTS (Request To Send) control signal.\nSets the state of the RTS (Request To Send) control signal.\nSets the number of stop bits.\nSets the timeout for future I/O operations.\nSets the timeout for future I/O operations.\nReturns the baud rate as an integer.\nReturns the number of stop bits.\nNumber of stop bits.\nReturns the current timeout.\nReturns the current timeout.\nApplies new settings to the serial device.")