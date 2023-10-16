import React, { useState } from 'react';

const RulesAdder = ({ tournament, setData }) => {
    const [rule, setRule] = useState('')
    return (
        <>
            <hr className='w-full mt-5' />
            <form className='w-full flex flex-col items-center ' onSubmit={(e) => {
                e.preventDefault()
                if (rule.trim().length > 20) {
                    setData({ ...tournament, rules: [...tournament.rules, rule.trim()] })
                    setRule('')
                }
            }}>
                <div className='flex items-center m-5 '>
                    Add Rules
                </div>

                <input type="text"
                    className='min-w-[200px] h-[30px] max-w-[400px] w-[90%] rounded-lg bg-slate-700 focus:outline-none m-3'
                    value={rule}
                    onChange={(e) => {
                        setRule(e.target.value)
                    }}
                />
                <p>{rule.trim().length > 20 ? 0 : 20 - rule.trim().length}</p>
                <button className='bg-blue-950 w-[100px] rounded-lg'
                    type='submit'>Add Rules</button>

                {tournament.rules?.map((data, i) => (
                    <p className='self-start'>{i + 1} - {data}</p>
                ))}


            </form>
        </>
    );
}

export default RulesAdder;
