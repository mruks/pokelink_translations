export default {
  'step': 'Stap {step}',
  'Steps': {
    'SessionName': 'Sessienaam',
    'GameSelection': 'Spel selectie',
    'SetupEmulator': 'Emulator instellen',
    'ConnectionDetails': 'Verbindingsdetails'
  },
  'Welcome': {
    'username': 'Gebruikersnaam'
  },
  'Details': {
    'GameTypes': {
      'solo': {
        'description': 'U speelt alleen met niemand waarmee u moet verbinden',
        'title': 'Individueel spel'
      },
      'multi': {
        'description': 'U speelt een spel met 1 of meerdere spelers',
        'title': 'Multiplayer'
      },
      'multi_soullink': {
        'description': 'U speelt een soul link spel met 1 of meerdere spelers',
        'title': 'Soul Link Multiplayer'
      },
      'multi_vs': {
        'description': 'U speelt tegen 1 of meerdere spelers',
        'title': 'VS Multiplayer'
      }
    }
  },
  'SessionDetails': {
    'SessionName': 'Sessienaam',
    'Save': 'Doorgaan met het instellen van de sessie',
    'Validation': {
      'SessionNameAndGameOptions': 'U moet een sessienaam ingeven voordat u kan doorgaan'
    }
  },

  'GameSelection': {
    'DetectionTypes': {
      'automatic': {
        'description': 'Als het spel ondersteund wordt, gaat Pokélink de informatie live van uw emulator lezen',
        'title': 'Automatisch teammanagement'
      },
      'manual': {
        'description': 'U kunt manueel uw team aanpassen door het gebruik van een simpele interface in de app',
        'title': 'Manueel teammanagement'
      }
    }
  },

  'Emulator': {
    'Subtitle': 'Nu, laten we nakijken of het proces volledig is',
    'AttemptingToConnect': 'Poging tot verbinding met de emulator... ',
    'RunEmulatorAndOpenGame': 'Gelieve de emulator op te starten en start het spel',
    'CurrentlySupportedEmulators': '(Enkel DeSmuME, VBA, Bizhawk & Citra zijn momenteel ondersteunt)',
    'CheckForX64': 'Kijk na of de emulator "x64" en niet "x86" is of vraag in de discord',
    'MultipleEmulatorsDetected': 'Er zijn meerdere emulators gedetecteerd',
    'NoEmulatorsFound': 'Geen emulators gevonden. Kunt u klikken om opnieuw te proberen?',
    'EmulatorFound': 'Emulator gedetecteerd! ({emulator} in gebruik)',
    'SelectADetectedEmulatorLong': 'Gelieve een van de emulators te selecteren die op het moment draaien:',
    'SelectADetectedEmulatorShort': 'Selecteer een Emulator',
    'DoesNotSupportGeneration': '{emulator} (Ondersteunt gen {generation} niet)',
    'DetectionIsPaused': 'Emulator detectie gepauseerd',
    'WaitingForGameData': 'Aan het wachten op speelinformatie...',
    'ConnectingToEmulator': 'Poging tot automatische verbinding met {emulator}',
    'LoadLuaScriptIntoEmulator': 'Laden van de Lua script in de emulator',
    'Instructions': {
      'VBA-RR': 'Dit kan gedaan worden door te gaan naar <em>Tools</em> » <em>Lua Script Window</em> » <em>New Lua Script Window</em> in de VBA-ReRecording <em>(Wees zeker om niet het script venster te sluiten. U kan het wel minimaliseren)</em',
      'DeSmuME': 'Dit kan gedaan worden door te gaan naar <em>Tools</em> » <em>Lua Scripting</em> » <em>New Lua Script Window</em> in <em>DeSmuME</strong> <em>(Wees zeker om niet het script venster te sluiten. U kan het wel minimaliseren)</em>',
      'Bizhawk': 'Pokélink genereerde automatisch een lua script voor uw sessie. We sloten Bizhawk, en hebben het opnieuw opgestart met het draaiende lua script voor u!'
    },
    'Errors': {
      'Bizhawk': {
        'EmulatorClosedUnexpectedly': {
          'Title': 'Sluiting van Bizhawk gedetecteerd',
          'Message': 'Pokelink detecteerd dat Bizhawk onverwacht gesloten is. Als u niet bedoeld had om Bizhawk te sluiten, gelieve deze sessie te beëindigen, sluit Pokélink, heropen Pokélink en hervat deze sessie om door te gaan.'
        },
        'RomRequired': {
          'Message': 'ROM moet gesleept worden tijdens de vorige stap om Bizhawk te gebruiken'
        }
      }
    }
  },

  'ConnectionDetails': {
    'ConnectionTypes': {
      'host': {
        'description': 'U heeft een poort geopend op uw router/modem of heeft een andere manier om hun te laten verbinden.',
        'title': 'Een server hosten'
      },
      'client': {
        'description': 'Iemand anders heeft hun netwerk ingesteld en ik wil met hun Pokélink app verbinden.',
        'title': 'Verbind met een ander persoon'
      }
    }
  }
}
