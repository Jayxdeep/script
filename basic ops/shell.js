const readline=require('readline')//built in to handle the useer inp in terminal
//create interface to read ip and op in terminal
const rl=readline.createInterface({
    input:process.stdin ,//std ip (keyboard)
    output:process.stdout, //std op(screen)
    prompt:'my-shell>'
})
//user cmnds
function processCommand(command){
    const [cmd,...args]=command.trim().split(' ')//trim extra spaces and slipt ip in words
    //check cmd and execute 
    switch(cmd){
        case 'exit':
            console.log('Existing the shell....')
            rl.close()
            break;
            case 'echo':
                console.log(args.join(' '))
                break;
            default: console.log(`Command not found:${cmd}`)
    }
}
rl.prompt()//strat shell promt
//listen user inp and excute cmds
rl.on('line',(input)=>{
    processCommand(input)//process entered cmd
    rl.prompt();
});
//handle shell exit
rl.on('close',()=>{
    console.log(('\nShell closed.'))
})
