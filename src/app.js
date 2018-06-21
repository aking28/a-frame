
  let content = document.getElementById('content')

    // Initializing A-Scene primitive 
    let scene = document.createElement('a-scene')
    content.append(scene)

    // Creating environment with A-Frame Extensions
    let myEnvironment = document.createElement('a-entity')
    myEnvironment.setAttribute('environment', 'preset:dream')
    
    scene.append(myEnvironment)

    //Box
 /*   let myBox = document.createElement('a-box')
    myBox.setAttribute('position', "-1 0.5 -3")
    myBox.setAttribute('rotation', "0 45 0")
    myBox.setAttribute('color', "#4CC3D9")

    scene.append(myBox)*/

    //Keyboard
    let myKeyboard = document.createElement('a-gui-flex-container')
    myKeyboard.setAttribute('flex-direction', 'collumn')
    myKeyboard.setAttribute('justify-content', 'center')
    myKeyboard.setAttribute('align-items', 'normal')
    myKeyboard.setAttribute('component-padding', '0.1')
    myKeyboard.setAttribute('opacity', '0.7')
    myKeyboard.setAttribute('width', '6.5')
    myKeyboard.setAttribute('height', '5')
    myKeyboard.setAttribute('position', '0 0 -4')
    myKeyboard.setAttribute('rotation', '-40 0 0') 

    scene.append(myKeyboard)
   

   let aButton = [
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'~',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '-3 2.4 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'!',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '-2.6 2.4 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'@',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '-2.2 2.4 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'#',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '-1.8 2.4 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'%',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '-1.4 2.4 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'$',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '-1 2.4 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'^',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '-0.6 2.4 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'&',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '-0.2 2.4 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'*',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '0.2 2.4 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'(',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '0.6 2.4 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:')',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '1 2.4 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'_',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '1.4 2.4 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'+',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '1.8 2.4 0'
      },
      {
        width:'.6',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'del',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '2.3 2.4 0'
      },
      {
        width:'.6',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'esc',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '2.9 2.4 0'
      },
     {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'`',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '-3 2  0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'1',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '-2.6 2  0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'2',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '-2.2 2  0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'3',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '-1.8 2  0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'4',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '-1.4 2  0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'5',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '-1 2  0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'6',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '-0.6  2  0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'7',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '-0.2  2  0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'8',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '0.2  2  0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'9',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '0.6  2  0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'0',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '1  2  0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'-',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '1.4  2  0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'=',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '1.8  2  0'
      },
      {
        width:'1.2',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'back space',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '2.6  2  0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'tab',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '-3 1.6 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'Q',
        fontFamily:'Overpass',
        margin:'0 0 0.05 0',
        position: '-2.6 1.6 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'W',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '-2.2 1.6 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'E',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '-1.8 1.6 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'R',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '-1.4 1.6 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'T',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '-1 1.6 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'Y',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '-0.6 1.6 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'U',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '-0.2 1.6 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'I',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '0.2 1.6 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'O',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '0.6 1.6 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'P',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '1 1.6 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'[',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '1.4 1.6 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:']',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '1.8 1.6 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'{',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '2.2 1.6 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'}',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '2.6 1.6 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'|',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '3 1.6 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'cap',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '-3 1.2 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'A',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '-2.6 1.2 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'S',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '-2.2 1.2 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'D',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '-1.8 1.2 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'F',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '-1.4 1.2 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'G',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '-1 1.2 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'H',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '-0.6 1.2 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'J',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '-0.2 1.2 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'K',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '0.2 1.2 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'L',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '0.6 1.2 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:';',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '1 1.2 0'
      },
    {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'0',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '1.4 1.2 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'0',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '1.8 1.2 0'
      },
      {
        width:'1.2',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'enter',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position:'2.6 1.2 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'Z',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '-3 0.8 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'X',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '-2.6 0.8 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'C',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '-2.2 0.8 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'V',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '-1.8 0.8 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'B',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '-1.4 0.8 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'N',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '-1 0.8 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'M',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '-0.6 0.8 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:',',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '-0.2 0.8 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'.',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '0.2 0.8 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'/',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '0.6 0.8 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'<',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '1 0.8 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'>',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '1.4 0.8 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'?',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '1.8 0.8 0'
      },
      {
        width:'1.2',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'shift',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '2.6 0.8 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'ctr',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '-3 0.4 0'
      },
      {
        width:'.4',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'alt',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '-2.6 0.4 0'
      },
      {
        width:'5.6',
        height:'.4',
        onclick:'buttonActionFunction',
        keyCode:'32',
        value:'Space Bar',
        fontFamily:'Helvetica',
        margin:'0 0 0.05 0',
        position: '.4 0.4 0'
      },

 ]  
        aButton.forEach((button) => {
        let aButton = document.createElement('a-gui-button')
        aButton.setAttribute('width', button.width)
        aButton.setAttribute('height', button.height)
        aButton.setAttribute('onclick', button.onclick)
        aButton.setAttribute('key-code', button.keyCode)
        aButton.setAttribute('value', button.value)
        aButton.setAttribute('font-family', button.fontFamily)
        aButton.setAttribute('margin', button.margin)
        aButton.setAttribute('position', button.position)
        
        myKeyboard.append(aButton)
    })

    //Login 
  /*  let myLogin = document.createElement('a-gui-flex-container')
    myLogin.setAttribute('flex-direction', 'collumn')
    myLogin.setAttribute('justify-content', 'center')
    myLogin.setAttribute('align-items', 'normal')
    myLogin.setAttribute('component-padding', '0.1')
    myLogin.setAttribute('opacity', '0.7')
    myLogin.setAttribute('width', '6.5')
    myLogin.setAttribute('height', '2.5')
    myLogin.setAttribute('position', '0 -4 -4')
    myLogin.setAttribute('rotation', '0 0 0') 

    scene.append(myLogin)*/
    

    //A Gui Button
  /*  let aButton = document.createElement('a-gui-button')
    aButton.setAttribute('width', '.5')
    aButton.setAttribute('height', '.5')
    aButton.setAttribute('onclick', 'buttonActionFunction')
    aButton.setAttribute('key-code', '32')
    aButton.setAttribute('value', 'A')
    aButton.setAttribute('font-family', 'Helvetica')
    aButton.setAttribute('margin', '0 0 0.05 0')

    myKeyboard.append(aButton)*/

    
    //Sphere
  /*  let mySphere = document.createElement('a-sphere')
    mySphere.setAttribute('position', "0 1.25 -5")
    mySphere.setAttribute('radius', "1.25")
    mySphere.setAttribute('color',"#adc80a")
  
    scene.append(mySphere)

    let mySphere2 = document.createElement('a-sphere')
    mySphere2.setAttribute('position', "-5 1.25 -5")
    mySphere2.setAttribute('radius', "1.25")
    mySphere2.setAttribute('color',"#adc80a")
  
    scene.append(mySphere2)*/


    //Plane
    let myPlane = docuemnt.createElement('a-plane')
    myPlane.setAttribute('position', "0 0 -4")
    myPlane.setAttribute('rotation', "-90 0 0")
    myPlane.setAttribute('width', "4")
    myPlane.setAttribute('height', "4")
    myPlane.setAttribute('color', "#62a200")
    
    scene.append(myPlane)

    //Sky
    let mysky = document.createElement('a-sky')
    mysky.setAttribute('color', "#ECECEC")

    scene.append(mySky)

    //Sphere
  /*  let mySpheres = [
      {
        position:'0 1.25 -5',
        radius:'1.25'
        color:'#adc80a'
      },
      {
        position:'0 5 -10', 
        radius:'1.98',
        color:'00ffff'
      } 
    ]

  mySpheres.forEach((sphere) => {
     let mySphere = document.createElement('a-sphere')
     mySphere.setAttribute('position', sphere.position)
     mySphere.setAttribute('radius', sphere.radius)
     mySphere.setAttribute('color', sphere.color)

    scene.append(mySpheres)
})*/
