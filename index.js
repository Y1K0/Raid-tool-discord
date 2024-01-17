const Discord = require("discord.js")
const client = new Discord.Client()
const readline = require('readline');
const fs = require("fs");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));

const token = config.token

 //             ANTI CRASH              //

  process.on('unhandledRejection', (error) => {
    console.error('Error no controlado:', error);
  });
  
  process.on('uncaughtException', (error) => {
    console.error('Excepción no capturada:', error);
  });


function showMenu() {

    console.log(`
    
    ██████╗ ██╗      ██████╗  ██████╗ ██████╗     ███╗   ███╗██╗   ██╗██╗  ████████╗██╗    ████████╗ ██████╗  ██████╗ ██╗     
    ██╔══██╗██║     ██╔═══██╗██╔═══██╗██╔══██╗    ████╗ ████║██║   ██║██║  ╚══██╔══╝██║    ╚══██╔══╝██╔═══██╗██╔═══██╗██║     
    ██████╔╝██║     ██║   ██║██║   ██║██║  ██║    ██╔████╔██║██║   ██║██║     ██║   ██║       ██║   ██║   ██║██║   ██║██║     
    ██╔══██╗██║     ██║   ██║██║   ██║██║  ██║    ██║╚██╔╝██║██║   ██║██║     ██║   ██║       ██║   ██║   ██║██║   ██║██║     
    ██████╔╝███████╗╚██████╔╝╚██████╔╝██████╔╝    ██║ ╚═╝ ██║╚██████╔╝███████╗██║   ██║       ██║   ╚██████╔╝╚██████╔╝███████╗
    ╚═════╝ ╚══════╝ ╚═════╝  ╚═════╝ ╚═════╝     ╚═╝     ╚═╝ ╚═════╝ ╚══════╝╚═╝   ╚═╝       ╚═╝    ╚═════╝  ╚═════╝ ╚══════╝

    `)

console.log(`
                                                                   BLOOD RAID TOOL ( FREE VERSION )
                                                ╭━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╮
                                                | [ 1 ]: Mass delete channels       | [ 7 ]: Bypass (simple)            |
                                                | [ 2 ]: Create channels            | [ 8 ]: Set nick all               |
                                                | [ 3 ]: Mass send                  | [ 9 ]: set Name server            |
                                                | [ 4 ]: create roles               | [ 10 ]: set Icon server (link)    |
                                                | [ 5 ]: delete roles               | [ 11 ]: server info (ID)          |
                                                | [ 6 ]: Create channels with ping  | [ 12 ]: credits                   |
                                                |                                                                       |
                                                ╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯
                                                               https://discord.gg/GskB98xa82

`)

}

function main() {

  showMenu();

  rl.question('Selecciona una opción (q para salir): ', (answer) => {

    switch (answer) {

      case '1':

        rl.question('[QUESTION]: ID server: ', (serverId) => {

            const deletePromsesas = [];

            const selectedGuild = client.guilds.cache.get(serverId);
          if (selectedGuild) {

            deletePromsesas.push(selectedGuild.channels.cache.forEach( channel => channel.delete().then( () => {
              console.log(`[CONSOLE]: Channel Deleted: [ ${channel.name} ] ( ${channel.id} )`)
            })))

            Promise.all(deletePromsesas)

            selectedGuild.channels.create("blood-raid-tool").then( (channel) => {
                channel.send("@everyone Blood raid tool. https://discord.gg/GskB98xa82")
            })

          }
          setTimeout(() => {
            console.clear()
            main();
          }, 10000);

        })

      break



      case '2':

      rl.question('[QUESTION]: ID server: ', (serverId) => {


        const selectedGuild = client.guilds.cache.get(serverId);

        const createChannelsPrmises = [];

      if (selectedGuild) {

        rl.question('[QUESTION]: Name Channels: ', async (NameChanells) => {

            for(let i  = 0; i < 100; i++){

                createChannelsPrmises.push(selectedGuild.channels.create(NameChanells).then( () => {
                    console.log(`[CONSOLE]: Channel Created: ${i}`)
                }))
            }
            
            await Promise.all(createChannelsPrmises)


        })

      }
    

    });

    case '3':

    rl.question('[QUESTION]: ID server: ', (serverId) => {
        rl.question('[QUESTION]: Spam message: ', (SPAMMessagelolo) => {


        const selectedGuild = client.guilds.cache.get(serverId);

        selectedGuild.channels.cache.filter( channel => channel.type === "text").forEach( async channel => {
          
                
            const messages = Array(10).fill(SPAMMessagelolo);
    
            await Promise.all(messages.map(msg => channel.send(msg)))

                console.log(`[CONSOLE]: Channel spammed [ ${channel.name} ] ( ${channel.id} )`)

        })

    })
    })

    setTimeout(() => {
        console.clear()
        main();
      }, 10000);

      break

      case '4':

      rl.question('[QUESTION]: ID server: ', (serverId) => {

        const selectedGuild = client.guilds.cache.get(serverId);

        const creatROlesPromises =  [];


        rl.question('[QUESTION]: Name Roles: ', async (nameRoles) => {

          for(let i = 0; i < 100; i++){

            creatROlesPromises.push(selectedGuild.roles.create(nameRoles).then( (role) => {

              console.log(`[CONSOLE]: Role created: ${i} [ ${role.name} ] ( ${role.id} )`)
            }))
          }

          await Promise.all(creatROlesPromises)


        })
      })

      break

      case '5':


      rl.question('[QUESTION]: ID server: ', (serverId) => {

        const selectedGuild = client.guilds.cache.get(serverId);

        const deleteRolesPromises =  [];

        deleteRolesPromises.push(selectedGuild.roles.cache.forEach( roles => roles.delete().then( () => {
          console.log(`[CONSOLE]: Role deleted: ${roles.name} ( ${roles.id} )`)
        })))

      });

    break

    case '6':

    rl.question('[QUESTION]: ID server: ', (serverId) => {

      const selectedGuild = client.guilds.cache.get(serverId);

      const createChannelsPormises =  [];

      rl.question('[QUESTION]: Channel name: ', (ChannelNane) => {
        rl.question('[QUESTION]: Spam mesage: ', (SpamMessage) => {

          for(let i = 0; i < 100; i++){

          createChannelsPormises.push(selectedGuild.channels.create(ChannelNane).then( async (channel) => {

            console.log(`[CONSOLE]: Channel Created ${i}`)

            const messages = Array(10).fill(SpamMessage);
    
            await Promise.all(messages.map(msg => channel.send(msg)))

          }))



        }})

      })

    })

    break

    case '7':

    rl.question('[QUESTION]: ID server: ', (serverId) => {

      const selectedGuild = client.guilds.cache.get(serverId);

      rl.question('[QUESTION]: Bypass name: ', (bypassName) => {


      const bypassPromises =  [];

      bypassPromises.push(selectedGuild.channels.cache.filter(channel => channel.type === 'text').forEach( channel => channel.setName(bypassName).then( () => {
        console.log(`[CONSOLE]: Channel bypassed ${channel.name} ( ${channel.id} )`)
      })))

      })
      
    })

    case '8':

    rl.question('[QUESTION]: ID server: ', (serverId) => {

      const selectedGuild = client.guilds.cache.get(serverId);


      const memberPromises = [];

      rl.question('[QUESTION]: Nick all: ', (bypassName) => {

        memberPromises.push(selectedGuild.members.cache.forEach( member => member.setNickname(bypassName).then( () => {
          console.log(`[CONSOLE]: Nick name changed ${member.user.username} ( ${member.user.id} )`)
        })))

        setTimeout(() => {
          console.clear()
          main();
        }, 10000);

      })

    })

    break

    case '9':
      rl.question('[QUESTION]: ID server: ', (serverId) => {

        const selectedGuild = client.guilds.cache.get(serverId);
  
        rl.question('[QUESTION]: Name server: ', (NameGuild) => {

          selectedGuild.setName(NameGuild).then( () => {
            console.log(`[CONSOLE]: server name changed successfully`)
          })

          setTimeout(() => {
            console.clear()
            main();
          }, 10000);
  

        })

      })

      break


      case '10':

      rl.question('[QUESTION]: ID server: ', (serverId) => {

        const selectedGuild = client.guilds.cache.get(serverId);
  
        rl.question('[QUESTION]: Icon link: ', (NameGuild) => {

          selectedGuild.setIcon(NameGuild).then( () => {
            console.log(`[CONSOLE]: server link changed successfully`)
          })

          setTimeout(() => {
            console.clear()
            main();
          }, 10000);
  

        })

      })

      case '11':

      rl.question('[QUESTION]: ID server: ', (serverId) => {

        const selectedGuild = client.guilds.cache.get(serverId);

        const channels = selectedGuild.channels.cache.size
        const roles = selectedGuild.roles.cache.size
        const membersServer = selectedGuild.members.cache.size
        const boostaServer = selectedGuild.premiumSubscriptionCount
        const serverName = selectedGuild.name
        const owner = selectedGuild.owner.user.username
        const ownerID = selectedGuild.owner.id
        const emojis = selectedGuild.emojis.cache.size
        const idServer = selectedGuild.id

        console.log("------------------------------------")

        console.log(`[CONSOLE]: Channels: ${channels}`)
        console.log("[CONSOLE]: Roles:", roles)
        console.log("[CONSOLE]: members Count:", membersServer)
        console.log("[CONSOLE]: Boost Count:", boostaServer)
        console.log("[CONSOLE]: server Name:", serverName)
        console.log("[CONSOLE]: owner username:", owner)
        console.log("[CONSOLE]: owner ID:", ownerID)
        console.log("[CONSOLE]: emojis:", emojis)
        console.log("[CONSOLE]: ID Server:", idServer)

        console.log("------------------------------------")

        setTimeout(() => {
          console.clear()
          main();
        }, 10000);

      })

      break

      case '12':
       console.log("                    https://discord.gg/frG6Ckr9c8")
      console.log("--------------------------------------------------------------------------------")
      console.log(" Muchas gracias por descagar nuetras tools publicas")
      console.log(" Si usted quiere alguna tool de nuestra tienda puede unirse al servidor de discord")
      console.log(" Las tools que se venden son 1000% mas rapido que las publicas. Confia en nosotros")
      console.log(" Join // unansen: https://discord.gg/frG6Ckr9c8")
      console.log("--------------------------------------------------------------------------------")
      console.log("                    https://discord.gg/frG6Ckr9c8")

      setTimeout(() => {
        console.clear()
        main();
      }, 10000);

      break


      case 'q':
        console.log('¡Hasta luego!');
        process.exit()
      default:
        console.log('Opción no válida. Por favor, selecciona una opción válida.');
        main();
    }



})} // finish question 

if (require.main === module) {
    main();
  } 

client.login(token)