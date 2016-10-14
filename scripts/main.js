var mutualExclusive = true;

(function(){


    if (document.readyState != 'loading'){
        handleAccordions();
    } else {
        document.addEventListener('DOMContentLoaded', handleAccordions);
    }

    function handleAccordions(){
        let accordions = document.querySelectorAll('.accordion');

        for (accordion of accordions){
            console.log(4);

            let items = accordion.querySelectorAll('.accordion-item');

            for (item of items){


                if (item.parentNode == accordion){

                    let title = item.querySelector('.item-title');
                    console.log(title);


                    title.addEventListener('click', function(evnt){
                        let item = evnt.target.parentNode;
                        if( item.classList.contains('open')){
                            item.classList.remove('open');
                        }else{
                            if( mutualExclusive){
                                let parent = item.parentNode;
                                let allItems = parent.querySelectorAll('.accordion-item');
                                for(i of allItems) {
                                    i.classList.remove('open');
                                }

                                item.classList.add('open');
                            }else{
                                item.classList.add('open');
                            }

                        }
                        /*for (item of items){
                            if(item.classList.contains('open')){
                                item.classList.remove('open');
                            } 
                            console.log(item);
                        }

                        
                        let content = evnt.target.parentNode;

                        // content.classList.toggle('open');
                        //have it go through and tell everything else
                        //that contains open to close
                        
                            content.classList.add('open');*/
                        
                    });
                }
                
            }
        }
    }
})();


