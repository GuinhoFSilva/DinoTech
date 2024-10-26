    function aparecerspino(){
    
        var aparecerspino = document.getElementById('divspino').style.display;

        if(aparecerspino == 'block'){
            document.getElementById('divspino').style.display = 'none'
            
        }else{
            document.getElementById('divspino').style.display = 'block'
            document.getElementById('divtirano').style.display = 'none'
            document.getElementById('divraptor').style.display = 'none'

    
            }
    
    
        }

    function aparecertirano(){

        var aparecertirano = document.getElementById('divtirano').style.display;

        if(aparecertirano == 'block'){
            document.getElementById('divtirano').style.display = 'none'

        }else{
            document.getElementById('divtirano').style.display = 'block'
            document.getElementById('divspino').style.display = 'none'
            document.getElementById('divraptor').style.display = 'none'

            }
        }

    function aparecerraptor(){

        var aparecerraptor = document.getElementById('divraptor').style.display;

        if(aparecerraptor == 'block'){
            document.getElementById('divraptor').style.display = 'none'
        
        }else{
            document.getElementById('divraptor').style.display = 'block'
            document.getElementById('divtirano').style.display = 'none'
            document.getElementById('divspino').style.display = 'none'
            }
    }