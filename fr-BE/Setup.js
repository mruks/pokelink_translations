export default {
  'step': 'Step {step}',
  'Steps': {
    'SessionName': 'Nom de session',
    'GameSelection': 'Selection du jeu',
    'SetupEmulator': 'Configuration du émulator',
    'ConnectionDetails': 'Détails de connexion'
  },
  'Welcome': {
    'username': 'Nom d\'utilisateur'
  },
  'Details': {
    'GameTypes': {
      'solo': {
        'description': 'Vous jouez seul sans avoir besoin de vous connecter aux autres',
        'title': 'Jeu individuel'
      },
      'multi': {
        'description': 'Vous jouez un jeu avec 1 ou plusieurs des autres joueurs',
        'title': 'Multiplayer'
      },
      'multi_soullink': {
        'description': 'Vous jouez à un lien d\'âme avec 1 ou plusieurs des autres joueurs',
        'title': 'Lien d\'âme Multiplayer'
      },
      'multi_vs': {
        'description': 'Vous jouez un versus avec 1 ou plusieurs des autres joueurs',
        'title': 'Multiplayer versus'
      }
    }
  },
  'SessionDetails': {
    'SessionName': 'Nom de session',
    'Save': 'Continuer avec la configuration de la session',
    'Validation': {
      'SessionNameAndGameOptions': 'Vous devez entrer un nom de session avant de pouvoir continuer'
    }
  },

  'GameSelection': {
    'DetectionTypes': {
      'automatic': {
        'description': 'Si votre jeu est supporté, Pokélink lira les données en direct depuis votre émulateur',
        'title': 'Gestion automatique du parti'
      },
      'manual': {
        'description': 'Vous pouvez modifier manuellement votre équipe à l\'aide d\'une interface simple dans l\'application',
        'title': 'Gestion manuelle du parti'
      }
    }
  },

  'Emulator': {
    'Subtitle': 'Vérifions maintenant que le processus est terminé',
    'AttemptingToConnect': 'Tentative de détection de l\'émulateur... ',
    'RunEmulatorAndOpenGame': 'Veuillez demarrer l\'émulateur et ouvrir le jeu',
    'CurrentlySupportedEmulators': '(Seulement DeSmuME, VBA, Bizhawk & Citra sont actuellement supportés)',
    'CheckForX64': 'Vérifiez si l\'émulateur est "x64" en place de "x86" ou demandez dans discord',
    'MultipleEmulatorsDetected': 'Plusieurs émulateurs détectés',
    'NoEmulatorsFound': 'Aucun émulateur trouvé, pourriez-vous cliquer pour réessayer?',
    'EmulatorFound': 'Émulateur détecté! (en utilisant {emulator})',
    'SelectADetectedEmulatorLong': 'Veuillez sélectionner l\'un des émulateurs que nous avons trouvés en cours d\'exécution :',
    'SelectADetectedEmulatorShort': 'Sélectionnez un émulateur',
    'DoesNotSupportGeneration': '{emulator} (Ne supporte pas gen {generation})',
    'DetectionIsPaused': 'Détection de l\'émulateur est pausé',
    'WaitingForGameData': 'En attente des données du jeu...',
    'ConnectingToEmulator': 'Tentative de connexion automatique à {emulator}',
    'LoadLuaScriptIntoEmulator': 'Chargez le script Lua dans votre émulateur',
    'Instructions': {
      'VBA-RR': 'Cela peut être fait par sélectionner <em>Tools</em> » <em>Lua Script Window</em> » <em>New Lua Script Window</em> dedans VBA-ReRecording <em>(Assurez-vous de ne pas fermer la fenêtre de script cependant, vous pouvez le minimiser)</em',
      'DeSmuME': 'Cela peut être fait par sélectionner <em>Tools</em> » <em>Lua Scripting</em> » <em>New Lua Script Window</em> dans <em>DeSmuME</strong> <em>(Assurez-vous de ne pas fermer la fenêtre de script cependant, vous pouvez le minimiser)</em>',
      'Bizhawk': 'Pokélink a automatiquement généré un script lua pour votre session. Nous avons fermé Bizhawk et l\'avons relancé avec le script lua injecté pour vous!'
    },
    'Errors': {
      'Bizhawk': {
        'EmulatorClosedUnexpectedly': {
          'Title': 'Bizhawk fermée détectée',
          'Message': 'PPokelink a détecté que Bizhawk a été fermé de façon inattendue. Si vous n\'avez pas eu l\'intention de fermer Bizhawk, veuillez terminer cette session svp, fermez Pokélink, rouvrez Pokélink et reprenez la session pour continuer.'
        },
        'RomRequired': {
          'Message': 'Le ROM doit être déposée à l\'étape précédente pour utiliser Bizhawk'
        }
      }
    }
  },

  'ConnectionDetails': {
    'ConnectionTypes': {
      'host': {
        'description': 'Vous avez ouvert un port sur votre routeur/modem ou vous disposez d\'un autre moyen de se connecter.',
        'title': 'Héberger un serveur'
      },
      'client': {
        'description': 'Quelqu\'un d\'autre a configuré son réseau et je vais me connecter à son application Pokélink.',
        'title': 'Se connecter à une autre personne'
      }
    }
  }
}
