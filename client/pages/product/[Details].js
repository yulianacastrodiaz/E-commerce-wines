import React from "react";


function Details() {
    return (

        <div>

            <div className='hero container max-w-screen-lg mx-auto pb-10'>


                <div classname='flex flex-col'>

                    <img src='../img/wine.jpg' alt='wine' className='mx-auto h-96' />
                    <p className='text-center'>
                        "Creamy is a popular description for white wines and sparkling wines fermented or aged in oak. In Champagne, creamy is a favored characteristic that is associated with the famous bottles of bubbly…such as Krug. A creamy wine could be in part because of something called Malo-Lactic conversion. Look for creamy in chardonnay if you like buttery. Look for creamy in cabernet sauvignon if you like smooooth."
                    </p>

                    <div className='flex justify-center align-middle'>
                        <button className="mt-8 flex bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded">Add to chart</button>
                    </div>

                    <div className='grid grid-cols-2 gap-5 mt-8'>

                        <div className='pl-80'>
                            <p>Category: RED</p>
                            <p>Tag: MERLOT</p>
                        </div>

                        <div>
                            <p>
                                CEPAS: La Mitad + 1 y República de la Boca: 100% Malbec./ 1905: 65% Malbec / 15% Cabernet Sauvignon / 15% Cabernet Franc / 5% Petit Verdot.</p>
                            <p>
                                ORIGEN: Luján de Cuyo, Mendoza.</p>
                            <p>
                                NOTAS DE CATA LA MITAD +1: “Vino de color violáceo profundo con tonos azulados. Sus aromas combinan frutos del bosque con hierbas del pedemonte mendocino, tabaco, chocolate y vainilla. En boca presenta taninos dulces y amables, con un largo final, ideal para acompañar carnes rojas y pastas.”</p>
                            <p>
                                NOTAS DE CATA REPÚBLICA DE LA BOCA: “De color violáceo profundo y brillante con tonos púrpura, buen caudal frutal que se complementa con los tonos especiados y ahumados de la crianza en perfecta armonía. Paladar amplio y jugoso, sabroso y tenso con taninos firmes que dan cuenta de un gran potencial de guarda. Un vino para lucirse en ocasiones especiales.”</p>
                            <p>
                                NOTAS DE CATA 1905: “Luce un color oscuro con tonos rojos violetas. Aromas a higo, frutos secos, café y notas florales como violetas y
                                rosas. En boca tiene una conjunción de sabores perfectamente integrados con la barrica. Un vino ícono de guarda.”</p>
                            <p>
                                ENÓLOGOS: Héctor y Pablo Durigutti.
                            </p>
                        </div>

                    </div>


                </div>
            </div>




        </div>


    )
}

export default Details;