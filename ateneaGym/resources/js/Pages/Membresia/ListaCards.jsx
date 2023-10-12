import React from 'react'
import { useState, useEffect } from 'react';
import CardMembresia from './CardMembresia';
import { router } from '@inertiajs/react'
function ListaCards({
    membresias,
    auth
}) {
    return (

        <>
            <h1 className="text-pink-500  text-center text-2xl pt-5 mb-5">
                Membresias
            </h1>
            <div className=" flex flex-wrap justify-center gap-8 max-w-5xl ml-10">


                {membresias.length > 0 &&
                    membresias.map((membre) => {
                        return (
                            <CardMembresia
                                key={membre.id}
                                membresia={membre}
                                auth={auth}
                            />
                        )
                    })}
            </div></>
    )
};

/*
return (
  <>
      <h1 className="text-pink-500  text-center text-2xl pt-5 mb-5">
          Membresias
      </h1>
      <div className=" flex flex-wrap justify-center gap-8 max-w-5xl ml-10">


          {membresias.length > 0 &&
              membresias.map((membre) => {
                  return (
                      <CardMembresia
                          key={membre.id}
                          membresia={membre}
                          auth={auth}
                      />
                  )
              })}
      </div></>

)*/


export default ListaCards