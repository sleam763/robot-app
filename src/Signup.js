import React from 'react'
import {NavLink} from 'react-router-dom'

const Signup=()=>{
    return(
        <div id='signup'>
            <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
                <article class="pa4 black-80">
                <form action="sign-up_submit" method="get" accept-charset="utf-8">
                <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                    <legend class="ph0 mh0 fw6 clip">Sign Up</legend>
                    <div class="mt3">
                    <label class="db fw4 lh-copy f6" for="email-address">Name</label>
                    <input class="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="name"  id="name"/>
                    </div>
                    <div class="mt3">
                    <label class="db fw4 lh-copy f6" for="email-address">Last name</label>
                    <input class="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="lastName"  id="lastName"/>
                    </div>
                    <div class="mt3">
                    <label class="db fw4 lh-copy f6" for="email-address">Email address</label>
                    <input class="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address"  id="email-address"/>
                    </div>
                    <div class="mt3">
                    <label class="db fw4 lh-copy f6" for="password">Password</label>
                    <input class="b pa2 input-reset ba bg-transparent w-100" type="password" name="password"  id="password"/>
                    </div>
                </fieldset>
                <div class="mt3"><NavLink to='/'><input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Sign Up"/></NavLink></div>
                </form>
                </article>
            </article>
        </div>
    )
};

export default Signup;