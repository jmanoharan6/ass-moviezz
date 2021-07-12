import React from 'react'




const Navigationbar = () => {
    return (
  
    <>
      <a class="nav-link active" href="/">Home <span class="sr-only">(current)</span></a>
      <a class="nav-link" href="/">Features</a>
      <a class="nav-link" href="/">Pricing</a>
      <a class="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
    </>
    )
}

export default Navigationbar
