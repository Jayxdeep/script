const readline=require('readline')//built in to handle the useer inp in terminal
const fs=require('fs')
const HISTORY_FILE='history.txt'//define history file storing prev cmnds
let history=fs.existsSync(HISTORY_FILE)?
fs.readFileSync(HISTORY_FILE,"utf-8").split("\n").filter(Boolean):[];//load prev history from file if it exists
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
            case 'history':
                console.log(history.join("\n"))
                break;
            default: console.log(`Command not found:${cmd}`)
    }
    //save cmd to history 
    if(command.trim()){
        history.push(command)
        fs.appendFileSync(HISTORY_FILE,command+"\n")//append cmd to history file
    }
}
rl.prompt()//start shell promt
//listen user inp and excute cmds
rl.on('line',(input)=>{
    processCommand(input)//process entered cmd
    rl.prompt();
});
//handle shell exit
rl.on('close',()=>{
    console.log(('\nShell closed.'))
})
