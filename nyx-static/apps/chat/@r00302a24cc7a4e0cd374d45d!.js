(() => {
  "use strict";
  const e = "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/chat", t = 4e5, n = "nyx-chat-command-prefix", a = "nyx-chat-guidelines-dismissed", o = e => /^[^\w\s:@]{1,2}$/u.test(String(e || "").trim()) ? String(e).trim() : "/", i = e => String(e).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  let r = o(localStorage.getItem(n));
  const s = [ "\ud83d\udc4d", "\u2764\ufe0f", "\ud83d\ude02", "\ud83d\ude2e", "\ud83d\ude22", "\ud83d\udd25", "\ud83c\udf89", "\ud83d\udc40" ], c = Object.freeze({
    grinning: "\ud83d\ude00",
    grin: "\ud83d\ude01",
    joy: "\ud83d\ude02",
    smiley: "\ud83d\ude03",
    smile: "\ud83d\ude04",
    sweat_smile: "\ud83d\ude05",
    laugh: "\ud83d\ude06",
    laughing: "\ud83d\ude06",
    satisfied: "\ud83d\ude06",
    sweat: "\ud83d\ude05",
    rofl: "\ud83e\udd23",
    rolling_on_the_floor_laughing: "\ud83e\udd23",
    wink: "\ud83d\ude09",
    blush: "\ud83d\ude0a",
    yum: "\ud83d\ude0b",
    sunglasses: "\ud83d\ude0e",
    heart_eyes: "\ud83d\ude0d",
    kissing_heart: "\ud83d\ude18",
    kissing: "\ud83d\ude17",
    thinking: "\ud83e\udd14",
    neutral_face: "\ud83d\ude10",
    expressionless: "\ud83d\ude11",
    unamused: "\ud83d\ude12",
    pensive: "\ud83d\ude14",
    confused: "\ud83d\ude15",
    upside_down: "\ud83d\ude43",
    upside_down_face: "\ud83d\ude43",
    money_mouth: "\ud83e\udd11",
    flushed: "\ud83d\ude33",
    frowning: "\ud83d\ude26",
    anguished: "\ud83d\ude27",
    fearful: "\ud83d\ude28",
    cold_face: "\ud83e\udd76",
    cold_sweat: "\ud83d\ude30",
    cry: "\ud83d\ude22",
    sob: "\ud83d\ude2d",
    scream: "\ud83d\ude31",
    angry: "\ud83d\ude20",
    rage: "\ud83d\ude21",
    smiling_imp: "\ud83d\ude08",
    imp: "\ud83d\udc7f",
    skull: "\ud83d\udc80",
    skull_crossbones: "\u2620\ufe0f",
    skull_and_crossbones: "\u2620\ufe0f",
    clown: "\ud83e\udd21",
    poop: "\ud83d\udca9",
    hankey: "\ud83d\udca9",
    shit: "\ud83d\udca9",
    ghost: "\ud83d\udc7b",
    alien: "\ud83d\udc7d",
    robot: "\ud83e\udd16",
    wave: "\ud83d\udc4b",
    raised_hand: "\u270b",
    ok_hand: "\ud83d\udc4c",
    v: "\u270c\ufe0f",
    crossed_fingers: "\ud83e\udd1e",
    handshake: "\ud83e\udd1d",
    pray: "\ud83d\ude4f",
    point_up: "\u261d\ufe0f",
    point_up_2: "\ud83d\udc46",
    point_down: "\ud83d\udc47",
    point_left: "\ud83d\udc48",
    point_right: "\ud83d\udc49",
    clap: "\ud83d\udc4f",
    muscle: "\ud83d\udcaa",
    thumbsup: "\ud83d\udc4d",
    thumbs_up: "\ud83d\udc4d",
    plus_one: "\ud83d\udc4d",
    thumbsdown: "\ud83d\udc4e",
    thumbs_down: "\ud83d\udc4e",
    minus_one: "\ud83d\udc4e",
    heart: "\u2764\ufe0f",
    red_heart: "\u2764\ufe0f",
    orange_heart: "\ud83e\udde1",
    yellow_heart: "\ud83d\udc9b",
    green_heart: "\ud83d\udc9a",
    blue_heart: "\ud83d\udc99",
    purple_heart: "\ud83d\udc9c",
    black_heart: "\ud83d\udda4",
    white_heart: "\ud83e\udd0d",
    broken_heart: "\ud83d\udc94",
    two_hearts: "\ud83d\udc95",
    sparkling_heart: "\ud83d\udc96",
    heartbeat: "\ud83d\udc93",
    fire: "\ud83d\udd25",
    boom: "\ud83d\udca5",
    collision: "\ud83d\udca5",
    eyes: "\ud83d\udc40",
    eye: "\ud83d\udc41\ufe0f",
    100: "\ud83d\udcaf",
    hundred: "\ud83d\udcaf",
    sparkles: "\u2728",
    star: "\u2b50",
    star2: "\ud83c\udf1f",
    zap: "\u26a1",
    warning: "\u26a0\ufe0f",
    white_check_mark: "\u2705",
    check: "\u2705",
    x: "\u274c",
    x_mark: "\u274c",
    question: "\u2753",
    grey_question: "\u2754",
    exclamation: "\u2757",
    grey_exclamation: "\u2755",
    tada: "\ud83c\udf89",
    confetti_ball: "\ud83c\udf8a",
    gift: "\ud83c\udf81",
    balloon: "\ud83c\udf88",
    rocket: "\ud83d\ude80",
    airplane: "\u2708\ufe0f",
    car: "\ud83d\ude97",
    house: "\ud83c\udfe0",
    computer: "\ud83d\udcbb",
    iphone: "\ud83d\udcf1",
    bulb: "\ud83d\udca1",
    book: "\ud83d\udcd6",
    books: "\ud83d\udcda",
    memo: "\ud83d\udcdd",
    pencil2: "\u270f\ufe0f",
    lock: "\ud83d\udd12",
    unlock: "\ud83d\udd13",
    key: "\ud83d\udd11",
    link: "\ud83d\udd17",
    paperclip: "\ud83d\udcce",
    mag: "\ud83d\udd0d",
    trophy: "\ud83c\udfc6",
    medal: "\ud83c\udfc5",
    soccer: "\u26bd",
    basketball: "\ud83c\udfc0",
    football: "\ud83c\udfc8",
    video_game: "\ud83c\udfae",
    game_die: "\ud83c\udfb2",
    headphones: "\ud83c\udfa7",
    musical_note: "\ud83c\udfb5",
    notes: "\ud83c\udfb6",
    microphone: "\ud83c\udf99\ufe0f",
    camera: "\ud83d\udcf7",
    tv: "\ud83d\udcfa",
    coffee: "\u2615",
    pizza: "\ud83c\udf55",
    hamburger: "\ud83c\udf54",
    cake: "\ud83c\udf70",
    cookie: "\ud83c\udf6a",
    dog: "\ud83d\udc36",
    cat: "\ud83d\udc31",
    mouse: "\ud83d\udc2d",
    fox: "\ud83e\udd8a",
    panda_face: "\ud83d\udc3c",
    monkey: "\ud83d\udc12",
    banana: "\ud83c\udf4c",
    apple: "\ud83c\udf4e",
    cherries: "\ud83c\udf52",
    earth_americas: "\ud83c\udf0e",
    sunny: "\u2600\ufe0f",
    cloud: "\u2601\ufe0f",
    rainbow: "\ud83c\udf08",
    snowflake: "\u2744\ufe0f",
    moon: "\ud83c\udf14",
    crescent_moon: "\ud83c\udf19"
  }), d = Object.freeze({
    ...c,
    ...globalThis.NYX_EMOJI_SHORTCODES || {}
  }), l = {
    owner: "Owner",
    co_owner: "Co-owner",
    admin: "Admin",
    manager: "Manager",
    developer: "Developer",
    moderator: "Moderator",
    support: "Support",
    tester: "Tester",
    contributor: "Contributor",
    member: "Member"
  }, m = {
    owner: 100,
    co_owner: 90,
    admin: 80,
    manager: 70,
    developer: 60,
    moderator: 50,
    support: 40,
    tester: 30,
    contributor: 20,
    member: 10
  }, u = [ "owner", "co_owner", "admin", "manager", "developer", "moderator", "support", "tester", "contributor", "member" ], p = [ {
    name: "say",
    usage: "/say message",
    description: "Send the supplied message without the command."
  }, {
    name: "upper",
    usage: "/upper message",
    description: "Convert a message to uppercase."
  }, {
    name: "lower",
    usage: "/lower message",
    description: "Convert a message to lowercase."
  }, {
    name: "title",
    usage: "/title message",
    description: "Capitalize every word in a message."
  }, {
    name: "reverse",
    usage: "/reverse message",
    description: "Reverse the characters in a message."
  }, {
    name: "clap",
    usage: "/clap message",
    description: "Put a clap between every word."
  }, {
    name: "space",
    usage: "/space message",
    description: "Add space between every character."
  }, {
    name: "mock",
    usage: "/mock message",
    description: "Alternate letter casing for a mocking message."
  }, {
    name: "quote",
    usage: "/quote message",
    description: "Format a message as a quote."
  }, {
    name: "code",
    usage: "/code message",
    description: "Format a message as inline code."
  }, {
    name: "bold",
    usage: "/bold message",
    description: "Apply Minecraft bold formatting."
  }, {
    name: "italic",
    usage: "/italic message",
    description: "Apply Minecraft italic formatting."
  }, {
    name: "underline",
    usage: "/underline message",
    description: "Apply Minecraft underline formatting."
  }, {
    name: "strike",
    usage: "/strike message",
    description: "Apply Minecraft strikethrough formatting."
  }, {
    name: "rainbow",
    usage: "/rainbow message",
    description: "Cycle readable Minecraft colors through a message."
  }, {
    name: "color",
    usage: "/color &code message",
    description: "Apply a Minecraft color code to a message."
  }, {
    name: "formatcodes",
    usage: "/formatcodes",
    description: "Show the supported Minecraft formatting codes."
  }, {
    name: "binary",
    usage: "/binary text",
    description: "Convert short text to UTF-8 binary."
  }, {
    name: "hex",
    usage: "/hex text",
    description: "Convert short text to UTF-8 hexadecimal."
  }, {
    name: "baseencode",
    usage: "/baseencode text",
    description: "Encode short text as Base64."
  }, {
    name: "basedecode",
    usage: "/basedecode value",
    description: "Decode a Base64 value."
  }, {
    name: "rot",
    usage: "/rot text",
    description: "Apply the reversible ROT13 substitution."
  }, {
    name: "length",
    usage: "/length text",
    description: "Count characters in text."
  }, {
    name: "words",
    usage: "/words text",
    description: "Count words in text."
  }, {
    name: "choose",
    usage: "/choose option | option",
    description: "Choose one option at random."
  }, {
    name: "roll",
    usage: "/roll [NdM]",
    description: "Roll dice, such as 2d20."
  }, {
    name: "coinflip",
    usage: "/coinflip",
    description: "Flip a coin."
  }, {
    name: "magicball",
    usage: "/magicball question",
    description: "Ask the Nyx magic ball a question."
  }, {
    name: "rps",
    usage: "/rps rock|paper|scissors",
    description: "Play rock, paper, scissors against Nyx."
  }, {
    name: "random",
    usage: "/random min max",
    description: "Choose a random whole number in a range."
  }, {
    name: "calc",
    usage: "/calc expression",
    description: "Calculate a basic numeric expression."
  }, {
    name: "timer",
    usage: "/timer 30s",
    description: "Start a timer in this Chat tab."
  }, {
    name: "remind",
    usage: "/remind 10m message",
    description: "Set a reminder for this Chat tab."
  }, {
    name: "date",
    usage: "/date",
    description: "Insert the current local date."
  }, {
    name: "time",
    usage: "/time",
    description: "Insert the current local time."
  }, {
    name: "timezone",
    usage: "/timezone [zone]",
    description: "Show the time in an IANA time zone."
  }, {
    name: "unix",
    usage: "/unix",
    description: "Insert the current Unix timestamp."
  }, {
    name: "serverinfo",
    usage: "/serverinfo",
    description: "Show a summary of this Nyx Chat server."
  }, {
    name: "membercount",
    usage: "/membercount",
    description: "Show the number of Chat members."
  }, {
    name: "onlinecount",
    usage: "/onlinecount",
    description: "Show how many Chat members are online."
  }, {
    name: "channels",
    usage: "/channels",
    description: "List visible text channels."
  }, {
    name: "voicechannels",
    usage: "/voicechannels",
    description: "List visible voice channels."
  }, {
    name: "dms",
    usage: "/dms",
    description: "Show the number of private conversations."
  }, {
    name: "status",
    usage: "/status",
    description: "Show your current Chat identity and role."
  }, {
    name: "topic",
    usage: "/topic",
    description: "Show the current channel topic."
  }, {
    name: "afk",
    usage: "/afk [reason]",
    description: "Tell the channel that you are away."
  }, {
    name: "brb",
    usage: "/brb [reason]",
    description: "Send a quick be-right-back message."
  }, {
    name: "back",
    usage: "/back",
    description: "Tell the channel that you returned."
  }, {
    name: "copyid",
    usage: "/copyid [@person]",
    description: "Copy a member UID to the clipboard."
  }, {
    name: "welcome",
    usage: "/welcome [@person]",
    description: "Send a friendly welcome message."
  } ], h = [ {
    name: "help",
    usage: "/help",
    description: "Show every Nyx Chat command."
  }, {
    name: "dm",
    usage: "/dm @person [message]",
    description: "Open a private conversation."
  }, {
    name: "giftcaffeine",
    aliases: [ "giftcaffiene" ],
    usage: "/giftcaffeine @person",
    description: "Share an available Caffeine gift."
  }, {
    name: "ban",
    usage: "/ban @person [message]",
    description: "Disable an account and show the member your message (Moderator or above).",
    staff: !0
  }, {
    name: "tempban",
    usage: "/tempban @person 1h reason",
    description: "Temporarily ban a member for 1 minute to 4 weeks (Moderator or above).",
    staff: !0
  }, {
    name: "untempban",
    usage: "/untempban @person",
    description: "Lift an active temporary ban (Moderator or above).",
    staff: !0
  }, {
    name: "duration",
    usage: "/duration @person 1h",
    description: "Change an active temporary-ban duration (Moderator or above).",
    staff: !0
  }, {
    name: "tempbans",
    aliases: [ "moderations" ],
    usage: "/tempbans",
    description: "List active temporary bans (Moderator or above).",
    staff: !0
  }, {
    name: "warn",
    usage: "/warn @person reason",
    description: "Send an official private warning and record it for staff (Moderator or above).",
    staff: !0
  }, {
    name: "ipban",
    usage: "/ipban @person [message]",
    description: "Disable an account, block its recorded IP, and show your message (Admin or above).",
    network: !0
  }, {
    name: "unban",
    usage: "/unban @person",
    description: "Re-enable a disabled account (Moderator or above).",
    staff: !0
  }, {
    name: "demote",
    usage: "/demote @person",
    description: "Move a member down one built-in role when your role permits it.",
    roles: !0
  }, {
    name: "roles",
    usage: "/roles",
    description: "List custom roles and their hierarchy."
  }, {
    name: "roleadd",
    usage: "/roleadd @person role",
    description: "Assign a custom role (Owner only).",
    owner: !0
  }, {
    name: "roleremove",
    usage: "/roleremove @person",
    description: "Remove a custom role (Owner only).",
    owner: !0
  }, {
    name: "userinfo",
    usage: "/userinfo @person",
    description: "Show a member's account and role details."
  }, {
    name: "avatar",
    usage: "/avatar @person",
    description: "Open a member's profile and avatar."
  }, {
    name: "channelinfo",
    usage: "/channelinfo",
    description: "Show details about the current channel."
  }, {
    name: "poll",
    usage: "/poll question | option | option",
    description: "Post a simple poll."
  }, {
    name: "timestamp",
    usage: "/timestamp",
    description: "Insert the current local date and time."
  }, {
    name: "lock",
    usage: "/lock",
    description: "Make this channel read-only except for moderators and higher roles.",
    lock: !0
  }, {
    name: "unlock",
    usage: "/unlock",
    description: "Allow members to send messages again without changing channel access.",
    lock: !0
  }, {
    name: "join",
    usage: "/join channel",
    description: "Join a voice channel."
  }, {
    name: "mute",
    aliases: [ "timeout" ],
    usage: "/mute @person",
    description: "Temporarily mute a member from Chat (Moderator or above).",
    staff: !0
  }, {
    name: "unmute",
    usage: "/unmute @person",
    description: "Remove a member's Chat mute (Moderator or above).",
    staff: !0
  }, {
    name: "purge",
    usage: "/purge [1-100]",
    description: "Delete the newest messages from the current text channel (Moderator or above).",
    staff: !0
  }, {
    name: "micmute",
    usage: "/micmute",
    description: "Mute your microphone."
  }, {
    name: "micunmute",
    usage: "/micunmute",
    description: "Unmute your microphone."
  }, {
    name: "deafen",
    usage: "/deafen",
    description: "Mute incoming voice audio."
  }, {
    name: "undeafen",
    usage: "/undeafen",
    description: "Restore incoming voice audio."
  }, {
    name: "disconnect",
    usage: "/disconnect",
    description: "Leave your current voice channel."
  }, {
    name: "who",
    usage: "/who",
    description: "List members who are online."
  }, {
    name: "ping",
    usage: "/ping",
    description: "Measure the Chat API response time."
  }, {
    name: "shrug",
    usage: "/shrug [message]",
    description: "Send a message with a shrug."
  }, {
    name: "tableflip",
    usage: "/tableflip [message]",
    description: "Send a table flip."
  }, {
    name: "unflip",
    usage: "/unflip [message]",
    description: "Put the table back."
  }, {
    name: "me",
    usage: "/me message",
    description: "Send an action-style message."
  }, ...p ], f = {
    docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    txt: "text/plain",
    pdf: "application/pdf",
    png: "image/png",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    gif: "image/gif",
    webp: "image/webp",
    mp3: "audio/mpeg",
    m4a: "audio/mp4",
    ogg: "audio/ogg",
    oga: "audio/ogg",
    wav: "audio/wav",
    weba: "audio/webm",
    mp4: "video/mp4",
    m4v: "video/mp4",
    ogv: "video/ogg",
    mov: "video/quicktime",
    webm: "video/webm"
  }, g = new Set(Object.values(f)), v = {
    app: document.querySelector("[data-chat-app]"),
    channelList: document.querySelector("[data-channel-list]"),
    directList: document.querySelector("[data-direct-list]"),
    channelTitle: document.querySelector("[data-channel-title]"),
    channelDescription: document.querySelector("[data-channel-description]"),
    conversationSymbol: document.querySelector("[data-conversation-symbol] use"),
    welcomeTitle: document.querySelector("[data-welcome-title]"),
    welcomeDescription: document.querySelector("[data-welcome-description]"),
    connection: document.querySelector("[data-connection-state]"),
    loading: document.querySelector("[data-loading-chat]"),
    gate: document.querySelector("[data-signin-gate]"),
    scroller: document.querySelector("[data-message-scroller]"),
    messageList: document.querySelector("[data-message-list]"),
    loadOlder: document.querySelector("[data-load-older]"),
    form: document.querySelector("[data-message-form]"),
    input: document.querySelector("[data-message-input]"),
    count: document.querySelector("[data-message-count]"),
    send: document.querySelector("[data-send-button]"),
    notice: document.querySelector("[data-chat-notice]"),
    messageContextMenu: document.querySelector("[data-message-context-menu]"),
    commandDialog: document.querySelector("[data-command-dialog]"),
    commandList: document.querySelector("[data-command-list]"),
    commandPrefix: document.querySelector("[data-command-prefix]"),
    currentUser: document.querySelector("[data-current-user]"),
    onlineCount: document.querySelector("[data-online-count]"),
    onlineLabel: document.querySelector("[data-online-label]"),
    offlineLabel: document.querySelector("[data-offline-label]"),
    onlineMembers: document.querySelector("[data-online-members]"),
    offlineMembers: document.querySelector("[data-offline-members]"),
    flaggedSearches: document.querySelector("[data-flagged-searches]"),
    flaggedSearchDialog: document.querySelector("[data-flagged-search-dialog]"),
    flaggedSearchList: document.querySelector("[data-flagged-search-list]"),
    shade: document.querySelector("[data-drawer-shade]"),
    memberDialog: document.querySelector("[data-member-dialog]"),
    memberDialogContent: document.querySelector("[data-member-dialog-content]"),
    dmDialog: document.querySelector("[data-dm-dialog]"),
    dmSearch: document.querySelector("[data-dm-search]"),
    dmPickerList: document.querySelector("[data-dm-picker-list]"),
    attachmentButton: document.querySelector("[data-attachment-button]"),
    attachmentInput: document.querySelector("[data-attachment-input]"),
    attachmentPreviews: document.querySelector("[data-attachment-previews]"),
    replyPreview: document.querySelector("[data-reply-preview]"),
    mentionMenu: document.querySelector("[data-mention-menu]"),
    voiceChannelList: document.querySelector("[data-voice-channel-list]"),
    voicePanel: document.querySelector("[data-voice-panel]"),
    voiceStatus: document.querySelector("[data-voice-status]"),
    voiceRoom: document.querySelector("[data-voice-room]"),
    voiceMute: document.querySelector("[data-voice-mute]"),
    voiceDeafen: document.querySelector("[data-voice-deafen]"),
    voiceScreen: document.querySelector("[data-voice-screen]"),
    voiceScreenStage: document.querySelector("[data-voice-screen-stage]"),
    voiceDisconnect: document.querySelector("[data-voice-disconnect]"),
    manageChannels: document.querySelector("[data-manage-channels]"),
    channelManagerDialog: document.querySelector("[data-channel-manager-dialog]"),
    channelManagerList: document.querySelector("[data-channel-manager-list]"),
    channelManagerForm: document.querySelector("[data-channel-manager-form]"),
    channelEditId: document.querySelector("[data-channel-edit-id]"),
    channelName: document.querySelector("[data-channel-name]"),
    channelDescriptionInput: document.querySelector("[data-channel-description-input]"),
    channelEditCancel: document.querySelector("[data-channel-edit-cancel]"),
    channelSave: document.querySelector("[data-channel-save]"),
    caffeineButton: document.querySelector("[data-caffeine-button]"),
    caffeineDialog: document.querySelector("[data-caffeine-dialog]"),
    caffeineStatus: document.querySelector("[data-caffeine-status]"),
    caffeineGiftList: document.querySelector("[data-caffeine-gift-list]"),
    caffeineGiftDialog: document.querySelector("[data-caffeine-gift-dialog]"),
    caffeineGiftMessage: document.querySelector("[data-caffeine-gift-message]"),
    caffeineAccept: document.querySelector("[data-caffeine-accept]")
  };
  v.memberGroups = document.querySelector("[data-member-groups]"), v.customCommandManager = document.querySelector("[data-custom-command-manager]"), 
  v.customCommandList = document.querySelector("[data-custom-command-list]"), v.customCommandForm = document.querySelector("[data-custom-command-form]"), 
  v.customCommandPrevious = document.querySelector("[data-custom-command-previous]"), 
  v.customCommandName = document.querySelector("[data-custom-command-name]"), v.customCommandAliases = document.querySelector("[data-custom-command-aliases]"), 
  v.customCommandDescription = document.querySelector("[data-custom-command-description]"), 
  v.customCommandResponse = document.querySelector("[data-custom-command-response]"), 
  v.customCommandCancel = document.querySelector("[data-custom-command-cancel]"), 
  v.customCommandSave = document.querySelector("[data-custom-command-save]"), v.guidelines = document.querySelector("[data-chat-guidelines]"), 
  v.guidelinesDismiss = document.querySelector("[data-chat-guidelines-dismiss]");
  const y = {
    token: "",
    tokenExpiresAt: 0,
    parentAuth: null,
    directAuthPromise: null,
    me: null,
    members: [],
    customRoles: [],
    customCommands: [],
    channels: [],
    conversations: [],
    latestActivity: {},
    revision: 0,
    active: {
      type: "channel",
      id: "general"
    },
    messages: new Map,
    hasMore: new Map,
    loaded: new Set,
    pollTimer: 0,
    dmPollTimer: 0,
    bootstrapTimer: 0,
    caffeineTimer: 0,
    noticeTimer: 0,
    busy: !1,
    sendQueue: Promise.resolve(),
    queuedSends: 0,
    lastRead: function() {
      try {
        const e = JSON.parse(localStorage.getItem("nyx.chat.lastRead") || "{}");
        return e && "object" == typeof e ? e : {};
      } catch {
        return {};
      }
    }(),
    files: [],
    replyingTo: null,
    blobUrls: new Map,
    blobExpires: new Map,
    blobPromises: new Map,
    audioContext: null,
    audioUnlocked: !1,
    dmNotificationsReady: !1,
    notifiedDm: new Set,
    mentionItems: [],
    mentionIndex: 0,
    mentionRange: null,
    voiceChannels: [],
    voiceParticipants: [],
    voiceSignalIds: new Set,
    voiceSessionId: "",
    voiceChannelId: "",
    voiceStream: null,
    voiceScreenStream: null,
    voiceScreenBusy: !1,
    voicePeers: new Map,
    voiceAudio: null,
    voiceAudioStarting: !1,
    voiceTransport: "webrtc",
    voiceAudioStatus: "",
    voiceHttpUntil: 0,
    voiceSequence: 0,
    voicePollTimer: 0,
    voicePolling: !1,
    voiceBusy: !1,
    voiceMuted: !1,
    voiceDeafened: !1,
    voiceIceServers: [ {
      urls: [ "stun:stun.l.google.com:19302", "stun:stun1.l.google.com:19302" ]
    } ],
    voiceRelayConfigured: !1,
    channelManagerKind: "text",
    channelManagerBusy: !1,
    caffeine: null,
    shownCaffeineGift: "",
    contextMessage: null,
    socket: null,
    socketConnected: !1,
    socketClientPromise: null,
    socketAuthRefreshTimer: 0,
    socketLastAuthRetryAt: 0,
    lastFallbackAt: 0
  }, w = setInterval(() => ve(), 500), b = (e = y.active) => `${e.type}:${e.id}`, S = () => "channel" === y.active.type ? y.channels.find(e => e.id === y.active.id) : null, C = () => "dm" === y.active.type ? y.conversations.find(e => e.id === y.active.id) : null;
  function x(e, t = "") {
    v.connection.classList.toggle("connected", "connected" === t), v.connection.classList.toggle("error", "error" === t), 
    v.connection.querySelector("span").textContent = e;
  }
  function E(e, t = "error") {
    clearTimeout(y.noticeTimer), v.notice.textContent = String(e || "Something went wrong."), 
    v.notice.classList.toggle("success", "success" === t), v.notice.hidden = !1, y.noticeTimer = setTimeout(() => {
      v.notice.hidden = !0;
    }, 5e3);
  }
  function k() {
    v.app.classList.remove("channels-open", "members-open"), v.shade.hidden = !0;
  }
  function $(e) {
    k(), v.app.classList.add(`${e}-open`), v.shade.hidden = !1;
  }
  function A(e) {
    return String(e || "N").trim().split(/\s+/).slice(0, 2).map(e => e[0] || "").join("").toUpperCase() || "N";
  }
  const M = new Set([ "none", "candlelight", "astral-ring-alpha", "celestial-crown", "neon-vortex", "solar-flare-ring", "void-ring", "cybernetic-halo", "crimson-shield", "quantum-ring", "ethereal-aura", "static-frost", "prismatic-glow", "supernova-ring", "neon-pulse", "arcane-circle", "cosmic-dust", "stellar-ring", "gilded-halo", "plasma-ring", "hyperdrive", "infernal-ring", "solar-ring", "nebula-ring", "prism-crown", "ember-ring", "vortex-crown" ]), N = (new Set([ "fx-cosmic-vortex", "fx-nebula-storm", "fx-stellar-burst", "fx-ethereal-flame", "fx-quantum-rift", "fx-astral-cascade", "fx-plasma-wave", "fx-supernova-flash", "fx-void-shards", "fx-prismatic-spark", "fx-arcane-pulse", "fx-solar-surge", "fx-neon-eclipse", "fx-celestial-drift", "fx-shadow-aura", "fx-hyper-aura", "fx-starlight-bloom", "fx-galaxy-shimmer", "fx-cyber-lattice", "fx-abyssal-ring", "fx-dimension-rift", "fx-chrono-spark", "fx-zenith-glow", "fx-infrared-pulse", "fx-glitch-storm", "fx-phantom-flame", "fx-vortex-surge", "fx-nebula-spark", "fx-starlight-echo", "fx-spectral-surge", "fx-cyber-matrix", "fx-dark-void", "fx-nebula-rift", "fx-solar-flare", "fx-sakura-blossom", "fx-arcane-prism", "fx-abyssal-pulse", "fx-neon-stardust", "fx-retro-wave", "fx-glitch-mirage", "fx-celestial-shine", "fx-phantom-mist", "fx-hyperdrive", "fx-quantum-bloom", "fx-prismatic-aura", "fx-astral-spark", "fx-thunderstorm", "fx-crimson-eclipse", "fx-electric-dream", "fx-frozen-shards", "fx-vortex-horizon", "fx-nova-beam", "fx-cybernetic-pulse", "fx-radiant-orbit" ]), 
  window.createNyxChatSocial({
    request: (...e) => F(...e),
    me: () => y.me,
    members: () => y.members,
    avatar: L,
    name: z,
    badge: J,
    startDm: async function(t) {
      try {
        if (!N.canMessage(t.uid)) throw new Error("Direct messages are unavailable between these accounts.");
        T("dms");
        const n = (await F(`${e}/conversations`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            participantUid: t.uid
          })
        })).conversation;
        if (!n) throw new Error("The private conversation could not be opened.");
        ee([ n, ...y.conversations.filter(e => e.id !== n.id) ]), v.dmDialog.close(), v.memberDialog.close(), 
        await tt({
          type: "dm",
          id: n.id
        });
      } catch (n) {
        E(n.message);
      }
    },
    closeDrawers: k,
    changed: () => {
      Ge(), re(), Jt();
    }
  }));
  function T(e) {
    document.querySelector("[data-chat-channels]").hidden = "chat" !== e, document.querySelector("[data-chat-directs]").hidden = "dms" !== e, 
    document.querySelectorAll("[data-chat-section]").forEach(t => t.setAttribute("aria-pressed", String(t.dataset.chatSection === e)));
  }
  function L(e, t = !1) {
    const n = document.createElement("span");
    n.className = "avatar" + (t ? " online" : "");
    const a = document.createElement("span");
    a.className = "avatar-face", a.textContent = A(e?.displayName), n.append(a);
    const o = String(e?.avatarUrl || "").trim();
    if (o) {
      const t = document.createElement("img");
      t.alt = "", t.referrerPolicy = "no-referrer", t.src = o, t.addEventListener("error", () => {
        a.textContent = A(e?.displayName);
      }, {
        once: !0
      }), a.replaceChildren(t);
    }
    const i = function(e) {
      return y.members.find(t => t.uid && t.uid === e?.uid) || e || {};
    }(e).avatarDecoration;
    if (M.has(i) && "none" !== i) {
      n.classList.add("nyx-avatar-decoration-" + i);
      const e = document.createElement("i");
      e.className = "nyx-avatar-decoration", e.setAttribute("aria-hidden", "true"), n.append(e);
    }
    return n;
  }
  function I(e, t = !1) {
    const n = new Date(e || 0);
    if (!Number.isFinite(n.getTime())) return "";
    if (t) return n.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit"
    });
    const a = new Date;
    return n.toDateString() === a.toDateString() ? n.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit"
    }) : n.toLocaleString([], {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit"
    });
  }
  function D(e) {
    const t = Number(e || 0);
    return t < 1024 ? `${t} B` : t < 1048576 ? `${(t / 1024).toFixed(t < 10240 ? 1 : 0)} KB` : t < 1073741824 ? `${(t / 1024 / 1024).toFixed(1)} MB` : `${(t / 1024 / 1024 / 1024).toFixed(2)} GB`;
  }
  document.querySelectorAll("[data-chat-section]").forEach(e => e.addEventListener("click", () => T(e.dataset.chatSection))), 
  v.channelTitle.addEventListener("click", () => {
    if ("dm" === y.active.type) {
      const e = y.conversations.find(e => e.id === y.active.id)?.other;
      e && ce(e);
    }
  });
  const q = Object.freeze({
    0: "#000000",
    1: "#0000aa",
    2: "#00aa00",
    3: "#00aaaa",
    4: "#aa0000",
    5: "#aa00aa",
    6: "#ffaa00",
    7: "#aaaaaa",
    8: "#555555",
    9: "#5555ff",
    a: "#55ff55",
    b: "#55ffff",
    c: "#ff5555",
    d: "#ff55ff",
    e: "#ffff55",
    f: "#ffffff"
  }), P = /(?:https?:\/\/|www\.|(?:[a-z0-9-]+\.)+[a-z]{2,}(?=[/?#]))[^\s<>"']*/gi;
  function R(e, t, {fallback: n = "", mentionMembers: a = null} = {}) {
    const o = String(t || n), i = /&[0-9a-fklmnor]/i.test(o.replace(P, "")), r = new RegExp("(" + P.source + ")|&([0-9a-fklmnor])|(@[A-Za-z0-9_.-]+)", "gi");
    let s, c = 0, d = {}, l = 0;
    const m = (t, n = "") => {
      if (!t) return;
      let o = null;
      if (n && a) {
        const e = n.toLowerCase(), t = a.get(e);
        ("@everyone" === e || t) && (o = document.createElement("span"), o.className = `message-mention${e === String(y.me?.handle || "").toLowerCase() ? " self" : ""}${"@everyone" === e ? " everyone" : ""}`, 
        t && o.addEventListener("click", () => ce(t)));
      }
      o || i || 0 !== Object.keys(d).length ? (o = o || document.createElement("span"), 
      o.textContent = t, function(e, t, n) {
        e.classList.add("minecraft-segment"), e.style.setProperty("--minecraft-index", String(n)), 
        t.color && (e.style.color = t.color, e.style.setProperty("--minecraft-color", t.color)), 
        t.bold && (e.style.fontWeight = "900"), t.italic && (e.style.fontStyle = "italic");
        const a = [];
        t.underline && a.push("underline"), t.strike && a.push("line-through"), a.length && (e.style.textDecoration = a.join(" ")), 
        t.magic && (e.classList.add("minecraft-magic"), e.dataset.minecraftPlain = e.textContent, 
        e.setAttribute("aria-label", e.textContent));
      }(o, d, l++), e.append(o)) : e.append(document.createTextNode(t));
    };
    for (;s = r.exec(o); ) if (m(o.slice(c, s.index)), c = r.lastIndex, s[1]) e.append(document.createTextNode(s[1])); else if (s[2]) {
      const e = s[2].toLowerCase();
      q[e] ? d = {
        color: q[e]
      } : "l" === e ? d.bold = !0 : "o" === e ? d.italic = !0 : "n" === e ? d.underline = !0 : "m" === e ? d.strike = !0 : "k" === e ? d.magic = !0 : "r" === e && (d = {});
    } else m(s[3], s[3]);
    m(o.slice(c)), i && e.classList.add("minecraft-formatted");
  }
  const j = setInterval(() => {
    document.hidden || function() {
      const e = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
      document.querySelectorAll(".minecraft-magic").forEach(t => {
        const n = String(t.dataset.minecraftPlain || "");
        n && (t.textContent = Array.from(n, t => /\s/u.test(t) ? t : e ? "\u25a0" : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?#$%&*+-="[Math.floor(72 * Math.random())]).join(""));
      });
    }();
  }, 110);
  function U(e, t) {
    R(e, t, {
      fallback: "Nyx member"
    }), e.classList.contains("minecraft-formatted") && e.classList.add("minecraft-formatted-name");
  }
  function O(e, t = null) {
    return t?.customRole?.label || l[String(e || "member")] || "Member";
  }
  function _(e) {
    return String(e || "").replace(/&[0-9a-fklmnor]/gi, "").trim();
  }
  function z(e, t = e?.displayName || "Nyx member") {
    const n = Object.prototype.hasOwnProperty.call(l, String(e?.role || "")) ? String(e.role) : "member", a = e?.customRole && /^#[0-9a-f]{6}$/i.test(String(e.customRole.color || "")), o = document.createElement("span");
    return o.className = "role-name" + (a ? " role-name-special role-name-custom" : "member" === n ? "" : ` role-name-special role-name-${n}`), 
    a && o.style.setProperty("--role-custom-color", e.customRole.color), U(o, t), o;
  }
  function B() {
    return !0 === y.me?.canModerate;
  }
  function V(e, t, n) {
    const a = document.createElement("button");
    a.type = "button", a.className = t, a.setAttribute("aria-label", n), a.title = n;
    const o = document.createElementNS("http://www.w3.org/2000/svg", "svg"), i = document.createElementNS("http://www.w3.org/2000/svg", "use");
    return i.setAttribute("href", `#icon-${e}`), o.append(i), a.append(o), a;
  }
  function J() {
    const e = document.createElement("span");
    e.className = "caffeine-badge";
    const t = document.createElementNS("http://www.w3.org/2000/svg", "svg"), n = document.createElementNS("http://www.w3.org/2000/svg", "use");
    return n.setAttribute("href", "#icon-coffee"), t.append(n), e.append(t, document.createTextNode("Caffeine")), 
    e;
  }
  async function G(e = !1) {
    if (!e && y.token && y.tokenExpiresAt > Date.now() + 3e4) return y.token;
    const t = await async function() {
      if (window.parent === window) return null;
      const e = `chat-${Date.now()}-${Math.random().toString(36).slice(2)}`;
      return new Promise(t => {
        let n = !1;
        const a = e => {
          n || (n = !0, clearTimeout(i), window.removeEventListener("message", o), t(e));
        }, o = t => {
          t.source === window.parent && t.origin === location.origin && "nyx:account-token-response" === t.data?.type && t.data?.requestId === e && a({
            available: !0,
            token: String(t.data.token || "")
          });
        }, i = setTimeout(() => a(null), 2500);
        window.addEventListener("message", o), window.parent.postMessage({
          type: "nyx:account-token-request",
          requestId: e
        }, location.origin);
      });
    }();
    if (t?.available) return y.parentAuth = !0, y.token = t.token, y.tokenExpiresAt = y.token ? Date.now() + 27e5 : 0, 
    y.token;
    y.parentAuth = !1;
    const n = await async function() {
      if (y.directAuthPromise) return y.directAuthPromise;
      y.directAuthPromise = (async () => {
        const e = await F("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/founder-profile/auth-config", {
          cache: "no-store"
        }, !1);
        if (!e?.enabled) return null;
        const [{initializeApp: t, getApps: n}, {getAuth: a, setPersistence: o, browserLocalPersistence: i}] = await Promise.all([ import("https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js"), import("https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js") ]), r = a(n().find(e => "nyx-founder-owner" === e.name) || t({
          apiKey: e.apiKey,
          authDomain: `${e.projectId}.firebaseapp.com`,
          projectId: e.projectId
        }, "nyx-founder-owner"));
        try {
          await o(r, i);
        } catch {}
        return "function" == typeof r.authStateReady && await r.authStateReady(), r;
      })();
      try {
        return await y.directAuthPromise;
      } catch (e) {
        throw y.directAuthPromise = null, e;
      }
    }();
    return y.token = n?.currentUser ? await n.currentUser.getIdToken(e) : "", y.tokenExpiresAt = y.token ? Date.now() + 27e5 : 0, 
    y.token;
  }
  async function F(t, n = {}, a = !0, o = !0) {
    const i = new Headers(n.headers || {});
    if (a) {
      const e = await G(!o);
      if (!e) {
        const e = new Error("Sign in to use Nyx Chat.");
        throw e.status = 401, e;
      }
      i.set("Authorization", `Bearer ${e}`);
    }
    const r = await fetch(t, {
      ...n,
      headers: i
    });
    let s = null;
    if ((r.headers.get("content-type") || "").includes("application/json")) s = await r.json(); else {
      const e = (await r.text()).trim();
      s = {
        error: e && e.length < 300 ? e : `Nyx received an unexpected response (${r.status}).`
      };
    }
    if (!r.ok) {
      if (401 === r.status && a && o) return F(t, n, !0, !1);
      const i = new Error(s?.error || `Request failed (${r.status}).`);
      throw i.status = r.status, i.retryAfter = Number(r.headers.get("retry-after") || 0), 
      429 === r.status && t === `${e}/messages` && (c = i.retryAfter, _t = Math.max(_t, Date.now() + 1e3 * Math.min(3600, Math.max(1, c || 10))), 
      clearTimeout(Ot), Ot = setTimeout(Jt, Math.max(0, _t - Date.now()) + 50), Jt()), 
      403 === r.status && t === `${e}/messages` && Zt().catch(() => {}), i;
    }
    var c;
    return s;
  }
  async function Y() {
    if (y.socket) try {
      const e = await G(!0);
      if (!e) return void dn();
      if (y.socket.auth = {
        token: e
      }, !y.socket.connected) return void y.socket.connect();
      await new Promise((t, n) => y.socket.timeout(8e3).emit("nyx:chat:authorize", {
        token: e
      }, (e, a) => {
        if (e) n(e); else if (a?.ok) t(); else {
          const e = new Error(a?.error || "Your Nyx Chat session has expired.");
          e.status = 401, n(e);
        }
      }));
    } catch (e) {
      401 === e?.status && dn();
    }
  }
  async function H() {
    if (!y.socket && y.token) try {
      const e = await ("function" == typeof window.io ? Promise.resolve(window.io) : (y.socketClientPromise || (y.socketClientPromise = new Promise((e, t) => {
        const n = document.querySelector("script[data-nyx-socket-client]"), a = n || document.createElement("script");
        let o = !1;
        const i = n => {
          o || (o = !0, clearTimeout(c), a.removeEventListener("load", r), a.removeEventListener("error", s), 
          n ? (y.socketClientPromise = null, t(n)) : e(window.io));
        }, r = () => "function" == typeof window.io ? i() : i(new Error("Nyx Chat realtime did not load.")), s = () => i(new Error("Nyx Chat realtime is unavailable.")), c = setTimeout(s, 8e3);
        a.addEventListener("load", r, {
          once: !0
        }), a.addEventListener("error", s, {
          once: !0
        }), n || (a.dataset.nyxSocketClient = "", a.async = !0, a.src = "/socket.io/socket.io.js", 
        document.head.append(a));
      })), y.socketClientPromise));
      if (!y.token) return;
      const t = e({
        path: "/socket.io",
        auth: {
          token: y.token
        },
        transports: [ "websocket", "polling" ],
        tryAllTransports: !0,
        reconnection: !0,
        reconnectionDelay: 500,
        reconnectionDelayMax: 5e3,
        timeout: 1e4
      });
      y.socket = t, t.on("connect", () => {
        y.socketConnected = !0, y.lastFallbackAt = 0, x("Live", "connected");
      }), t.on("disconnect", () => {
        y.socketConnected = !1, y.me && x("Reconnecting", "error");
      }), t.on("connect_error", e => {
        y.socketConnected = !1, x("Retrying", "error"), "NYX_CHAT_AUTH" !== e?.data?.code || Date.now() - y.socketLastAuthRetryAt < 1e4 || (y.socketLastAuthRetryAt = Date.now(), 
        Y());
      }), t.on("nyx:chat:ready", e => {
        Xt({
          force: !0
        }).finally(() => {
          y.revision = Math.max(y.revision, Number(e?.revision || 0));
        });
      }), t.on("nyx:chat:event", e => {
        (async function(e) {
          if (!e || "object" != typeof e) return;
          y.revision = Math.max(y.revision, Number(e.revision || 0));
          const t = function(e) {
            const t = "conversation" === e?.scopeType ? "dm" : e?.scopeType, n = String(e?.scopeId || "");
            return t && n ? {
              type: t,
              id: n
            } : null;
          }(e), n = t ? b(t) : "";
          if ("message" === e.kind && t && e.message) {
            const a = v.scroller.scrollHeight - v.scroller.scrollTop - v.scroller.clientHeight < 100, o = Number(e.message.createdAtMs || e.createdAtMs || 0), i = String(e.lastMessageAuthorUid || e.message.author?.uid || "");
            if (i && i === y.me?.uid) {
              const t = (y.messages.get(n) || []).find(t => t.pending && t.text === e.message.text && Math.abs(Number(t.createdAtMs || 0) - o) < 3e4);
              t && Nt(n, t.id);
            }
            if (ze(n, [ e.message ]), "channel" === t.type) y.latestActivity[t.id] = Math.max(Number(y.latestActivity[t.id] || 0), o), 
            i && i !== y.me?.uid && Q(`message:${t.id}:${o}`, !0 === e.mentionsViewer || X(e.message?.text || e.lastMessageText) ? "mention" : "chat", {
              uid: i,
              sender: e.message.author?.displayName || "Someone",
              preview: e.message.text || e.message.attachments?.[0]?.name || ""
            }); else {
              const n = y.conversations.find(e => e.id === t.id);
              n ? (n.updatedAtMs = o, n.lastMessageAtMs = o, n.lastMessageText = e.message.text || e.message.attachments?.[0]?.name || "Attachment", 
              n.lastMessageAuthorUid = i, y.conversations.sort((e, t) => Number(t.updatedAtMs || 0) - Number(e.updatedAtMs || 0)), 
              re()) : te().catch(() => {}), i && i !== y.me?.uid && Q(`dm:${t.id}:${o}`, !0 === e.mentionsViewer || X(e.message?.text || "") ? "mention" : "dm", {
                uid: i,
                sender: e.message.author?.displayName || "Someone",
                preview: e.message.text || ""
              });
            }
            return ie(), void (n === b() && (Ge(), document.hidden || Xe(), a && requestAnimationFrame(() => {
              v.scroller.scrollTop = v.scroller.scrollHeight;
            })));
          }
          if ("delete" === e.kind && t && e.messageId) {
            const t = y.messages.get(n) || [];
            return y.messages.set(n, t.filter(t => t.id !== e.messageId)), void (n === b() && Ge());
          }
          if ("purge" === e.kind && t && Array.isArray(e.messageIds)) {
            const t = new Set(e.messageIds.map(String));
            return y.messages.set(n, (y.messages.get(n) || []).filter(e => !t.has(e.id))), void (n === b() && Ge());
          }
          if ("reaction" === e.kind && t && e.messageId) {
            const t = (y.messages.get(n) || []).find(t => t.id === e.messageId);
            return void (t && (t.reactions = Array.isArray(e.reactions) ? e.reactions : [], 
            n === b() && Ge()));
          }
          if ("presence" === e.kind && e.uid) {
            const t = y.members.find(t => t.uid === e.uid);
            return void (t && (t.online = !0 === e.online, de(), re()));
          }
          "configuration" !== e.kind && "members" !== e.kind ? "caffeine" !== e.kind ? "conversation" === e.kind && await te().catch(() => {}) : await Kt() : await Zt().catch(() => {});
        })(e).catch(() => {});
      }), t.on("nyx:voice:refresh", () => {
        y.me && Ie();
      }), t.on("nyx:voice:signal", e => {
        e?.toSessionId === y.voiceSessionId && Te(e);
      }), clearInterval(y.socketAuthRefreshTimer), y.socketAuthRefreshTimer = setInterval(() => {
        Y();
      }, 27e5);
    } catch {
      y.socketConnected = !1, x("Live (fallback)", "connected");
    }
  }
  function W() {
    clearInterval(y.socketAuthRefreshTimer), y.socketAuthRefreshTimer = 0, y.socket && (y.socket.removeAllListeners(), 
    y.socket.disconnect(), y.socket = null), y.socketConnected = !1;
  }
  async function K(t) {
    const n = y.blobUrls.get(t.id), a = Number(y.blobExpires.get(t.id) || 0);
    if (n && (!a || a > Date.now() + 5e3)) return n;
    if (n && String(n).startsWith("blob:") && URL.revokeObjectURL(n), y.blobUrls.delete(t.id), 
    y.blobExpires.delete(t.id), y.blobPromises.has(t.id)) return y.blobPromises.get(t.id);
    const o = (async () => {
      if (t.streamed) {
        const n = await F(`${e}/attachments/${encodeURIComponent(t.id)}/ticket`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: "{}"
        });
        if (!n.url) throw new Error("Attachment unavailable.");
        return y.blobUrls.set(t.id, n.url), y.blobExpires.set(t.id, Number(n.expiresAtMs || 0)), 
        y.blobPromises.delete(t.id), n.url;
      }
      const n = await G(), a = await fetch(t.url, {
        headers: {
          Authorization: `Bearer ${n}`
        }
      });
      if (!a.ok) throw new Error("Attachment unavailable.");
      const o = URL.createObjectURL(await a.blob());
      return y.blobUrls.set(t.id, o), y.blobPromises.delete(t.id), o;
    })().catch(e => {
      throw y.blobPromises.delete(t.id), e;
    });
    return y.blobPromises.set(t.id, o), o;
  }
  function Z() {
    if (!y.audioUnlocked) try {
      const e = window.AudioContext || window.webkitAudioContext;
      if (!e) return;
      y.audioContext = y.audioContext || new e, y.audioContext.resume(), y.audioUnlocked = !0;
    } catch {}
  }
  function Q(e, t = "chat", n = {}) {
    if (N.muted(n.uid)) return;
    if (e = e + ":" + t, y.notifiedDm.has(e)) return;
    y.notifiedDm.add(e), y.notifiedDm.size > 200 && y.notifiedDm.delete(y.notifiedDm.values().next().value);
    const a = "mention" === t ? "mention" : "dm" === t ? "dm" : "chat";
    if (window.parent !== window) return void window.parent.postMessage({
      type: "nyx:chat-notification",
      notificationId: String(e).slice(0, 180),
      kind: a,
      sender: String(n.sender || "").slice(0, 80),
      preview: "mention" === a ? String(n.preview || "").slice(0, 240) : ""
    }, location.origin);
    "mention" === a && function(e = {}) {
      let t = document.querySelector(".chat-mention-toast");
      t || (t = document.createElement("div"), t.className = "chat-mention-toast", t.setAttribute("role", "status"), 
      document.body.append(t)), clearTimeout(t.dismissTimer);
      const n = document.createElement("span");
      n.className = "chat-toast-icon", n.textContent = "@", n.setAttribute("aria-hidden", "true");
      const a = document.createElement("span");
      a.textContent = String(e.sender || "Someone").slice(0, 80) + " mentioned you" + (e.preview ? ": " + String(e.preview).slice(0, 240) : "");
      const o = document.createElement("i");
      o.setAttribute("aria-hidden", "true"), t.replaceChildren(n, a, o), t.hidden = !1, 
      t.dismissTimer = setTimeout(() => {
        t.hidden = !0;
      }, 2e3);
    }(n);
    const o = y.audioContext;
    if (y.audioUnlocked && o) try {
      o.resume();
      const e = o.currentTime;
      (function(e) {
        return "mention" === e ? [ [ 0, 780, .4, .18 ], [ .09, 980, .45, .18 ], [ .18, 1180, .5, .2 ] ] : "dm" === e ? [ [ 0, 660, .34, .17 ], [ .11, 880, .38, .18 ] ] : [ [ 0, 620, .3, .16 ], [ .11, 760, .34, .17 ] ];
      })(a).forEach(([t, n, a, i]) => {
        const r = o.createOscillator(), s = o.createGain();
        r.type = "sine", r.frequency.setValueAtTime(n, e + t), s.gain.setValueAtTime(1e-4, e + t), 
        s.gain.exponentialRampToValueAtTime(a, e + t + .012), s.gain.exponentialRampToValueAtTime(1e-4, e + t + i), 
        r.connect(s), s.connect(o.destination), r.start(e + t), r.stop(e + t + i + .01);
      });
    } catch {}
  }
  function X(e) {
    const t = function(e) {
      return [ ...String(e || "").toLowerCase().matchAll(/(?:^|[^a-z0-9_.-])@([a-z0-9_.-]+)/g) ].map(e => e[1]);
    }(e);
    if (t.includes("everyone")) return !0;
    const n = String(y.me?.handle || "").toLowerCase().replace(/^@/, "");
    return Boolean(n && t.includes(n));
  }
  function ee(e, {notify: t = !1} = {}) {
    const n = new Map(y.conversations.map(e => [ e.id, e ])), a = e.map(e => ({
      ...n.get(e.id),
      ...e
    })).sort((e, t) => Number(t.updatedAtMs || 0) - Number(e.updatedAtMs || 0));
    t && y.dmNotificationsReady && a.forEach(e => {
      const t = n.get(e.id);
      Number(e.lastMessageAtMs || 0) > Number(t?.lastMessageAtMs || 0) && e.lastMessageAuthorUid && e.lastMessageAuthorUid !== y.me?.uid && Q(`dm:${e.id}:${e.lastMessageAtMs}`, "dm", {
        uid: e.lastMessageAuthorUid
      });
    }), y.conversations = a, y.dmNotificationsReady = !0, re(), "dm" === y.active.type && _e();
  }
  async function te() {
    const t = await F(`${e}/conversations`, {
      cache: "no-store"
    });
    ee(Array.isArray(t.conversations) ? t.conversations : [], {
      notify: !0
    });
    const n = t.channelActivity && "object" == typeof t.channelActivity ? t.channelActivity : {};
    Object.entries(n).forEach(([e, t]) => {
      const n = Number(t?.lastMessageAtMs || 0), a = Number(y.latestActivity[e] || 0);
      n > a && t?.lastMessageAuthorUid && t.lastMessageAuthorUid !== y.me?.uid && Q(`message:${e}:${n}`, X(t.lastMessageText) ? "mention" : "chat", {
        uid: t.lastMessageAuthorUid,
        sender: y.members.find(e => e.uid === t.lastMessageAuthorUid)?.displayName || "Someone",
        preview: t.lastMessageText || ""
      }), y.latestActivity[e] = Math.max(a, n);
    }), ie();
  }
  const ne = [ [ "announcements", "Announcements" ], [ "chat", "Chat" ], [ "info", "Info" ], [ "links", "Links" ] ], ae = new Set;
  function oe(e) {
    if (ne.some(([t]) => t === e.group)) return e.group;
    const t = `${e.id || ""} ${e.name || ""}`.toLowerCase();
    return /\b(announcements?|updates?|news)\b/.test(t) ? "announcements" : /\b(links?|resources?)\b/.test(t) ? "links" : /\b(info|information|rules?|welcome|faq|byod|bugs?|suggestions?|features?)\b/.test(t) ? "info" : "chat";
  }
  function ie() {
    const e = v.channelList.contains(document.activeElement) ? document.activeElement.dataset.channelGroupToggle : null;
    v.channelList.replaceChildren();
    for (const [t, n] of ne) {
      const e = y.channels.filter(e => oe(e) === t);
      if (!e.length) continue;
      const a = document.createElement("section");
      a.className = "channel-group", a.dataset.channelGroup = t;
      const o = document.createElement("h3"), i = document.createElement("button");
      i.type = "button", i.className = "channel-group-toggle", i.dataset.channelGroupToggle = t;
      const r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      r.setAttribute("viewBox", "0 0 16 16"), r.setAttribute("aria-hidden", "true");
      const s = document.createElementNS("http://www.w3.org/2000/svg", "path");
      s.setAttribute("d", "m4 6 4 4 4-4"), r.append(s);
      const c = document.createElement("span");
      c.textContent = n, i.append(r, c);
      const d = document.createElement("div");
      d.className = "channel-group-list", d.id = `chat-group-${t}`, d.hidden = ae.has(t), 
      i.setAttribute("aria-expanded", String(!d.hidden)), i.setAttribute("aria-controls", d.id), 
      i.addEventListener("click", () => {
        d.hidden = !d.hidden, i.setAttribute("aria-expanded", String(!d.hidden)), d.hidden ? ae.add(t) : ae.delete(t);
      }), o.append(i), a.append(o, d), e.forEach(e => {
        const t = document.createElement("button");
        t.type = "button", t.dataset.channelId = e.id, t.className = "channel-button" + ("channel" === y.active.type && e.id === y.active.id ? " active" : "");
        const n = document.createElementNS("http://www.w3.org/2000/svg", "svg"), a = document.createElementNS("http://www.w3.org/2000/svg", "use");
        a.setAttribute("href", "#icon-hash"), n.append(a);
        const o = document.createElement("span");
        o.textContent = e.name;
        const r = document.createElement("i");
        r.setAttribute("aria-hidden", "true"), t.append(n, o, r);
        const s = `channel:${e.id}`, c = s !== b() && Number(y.latestActivity[e.id] || 0) > Number(y.lastRead[s] || 0);
        t.classList.toggle("unread", c), c && i.classList.add("unread"), t.addEventListener("click", () => {
          tt({
            type: "channel",
            id: e.id
          });
        }), d.append(t);
      }), v.channelList.append(a);
    }
    e && v.channelList.querySelector(`[data-channel-group-toggle="${e}"]`)?.focus({
      preventScroll: !0
    });
  }
  function re() {
    if (v.directList.replaceChildren(), !y.conversations.length) {
      const e = document.createElement("p");
      return e.className = "direct-empty", e.textContent = "Start a private conversation with a member.", 
      void v.directList.append(e);
    }
    y.conversations.filter(e => !N.muted(e.other?.uid)).forEach(e => {
      const t = document.createElement("button");
      t.type = "button", t.className = "direct-button" + ("dm" === y.active.type && e.id === y.active.id ? " active" : ""), 
      t.append(L(e.other, Boolean(y.members.find(t => t.uid === e.other.uid)?.online)));
      const n = document.createElement("span"), a = document.createElement("strong");
      a.append(z(e.other));
      const o = document.createElement("small");
      o.textContent = e.lastMessageText || e.other.handle, n.append(a, o), t.append(n);
      const i = `dm:${e.id}`;
      t.classList.toggle("unread", i !== b() && Number(e.lastMessageAtMs || 0) > Number(y.lastRead[i] || 0)), 
      t.addEventListener("click", () => {
        tt({
          type: "dm",
          id: e.id
        });
      }), v.directList.append(t);
    });
  }
  function se() {
    if (v.currentUser.replaceChildren(), !y.me) return void (v.currentUser.hidden = !0);
    v.currentUser.append(L(y.me, !0));
    const e = document.createElement("span"), t = document.createElement("strong");
    t.append(z(y.me)), y.me.caffeine && t.append(J());
    const n = document.createElement("small");
    n.textContent = `${y.me.handle} \xb7 ${_(y.me.roleLabel || O(y.me.role, y.me))}`, 
    e.append(t, n), v.currentUser.append(e), v.currentUser.hidden = !1;
  }
  function ce(e) {
    N.open(e);
  }
  function de() {
    const e = (e, t) => Number(t.online) - Number(e.online) || String(e.displayName || "").localeCompare(String(t.displayName || ""), void 0, {
      sensitivity: "base",
      numeric: !0
    }), t = new Map;
    y.members.forEach(e => {
      const n = (e => e?.customRole?.id ? `custom:${e.customRole.id}` : Object.prototype.hasOwnProperty.call(l, String(e?.role || "")) ? String(e.role) : "member")(e);
      t.has(n) || t.set(n, {
        key: n,
        label: e.customRole?.label || O(e.role),
        rank: Number(e.customRole?.rank || m[e.role] || 10),
        color: e.customRole?.color || "",
        members: []
      }), t.get(n).members.push(e);
    }), v.onlineCount.querySelector("b").textContent = String(y.members.filter(e => e.online).length), 
    v.memberGroups.replaceChildren(), [ ...t.values() ].sort((e, t) => t.rank - e.rank || _(e.label).localeCompare(_(t.label))).forEach(t => {
      const n = t.members.sort(e), a = document.createElement("section");
      a.className = `member-group member-group-${t.key.replace(/[^a-z0-9_-]/gi, "-")}`;
      const o = document.createElement("h2"), i = document.createElement("span");
      U(i, t.label), o.append(i, document.createTextNode(` \u2014 ${n.length}`)), t.color && (o.style.color = t.color);
      const r = document.createElement("div");
      r.className = "member-list", n.forEach(e => {
        const t = document.createElement("button");
        t.type = "button", t.className = "member-button" + (e.online ? "" : " offline"), 
        t.append(L(e, e.online));
        const n = document.createElement("span"), a = document.createElement("strong");
        a.append(z(e)), e.caffeine && a.append(J());
        const o = document.createElement("small");
        o.textContent = e.self ? "You" : e.online ? "Online" : "Offline", n.append(a, o), 
        t.append(n), t.addEventListener("click", () => ce(e)), r.append(t);
      }), a.append(o, r), v.memberGroups.append(a);
    });
  }
  function le() {
    return document.querySelector("[data-voice-transport]")?.value || "auto";
  }
  let me;
  function ue(e) {
    return "relay" === y.voiceTransport || "relay" === e?.audioTransport;
  }
  function pe() {
    y.voiceAudio?.close(), y.voiceAudio = null, y.voiceAudioStarting = !1;
  }
  async function he() {
    y.voiceSessionId && "relay" !== y.voiceTransport && (y.voiceTransport = "relay", 
    y.voiceAudioStatus = "Connecting compatibility voice\u2026", Ce(), await Pe({
      announce: !1
    }), E("Switching to compatibility voice. Screen sharing requires WebRTC."), await fe(), 
    ye());
  }
  async function fe() {
    if (!y.voiceSessionId || "relay" !== y.voiceTransport && !y.voiceParticipants.some(e => e.uid !== y.me?.uid && e.channelId === y.voiceChannelId && "relay" === e.audioTransport)) return void (y.voiceAudio && (y.voiceSequence = y.voiceAudio.sequence, 
    pe(), y.voiceAudioStatus = ""));
    if (y.voiceAudio || y.voiceAudioStarting) return;
    const t = y.voiceSessionId;
    y.voiceAudioStarting = !0;
    try {
      await (window.NyxVoiceRelay ? Promise.resolve() : (me || (me = new Promise((e, t) => {
        const n = document.createElement("script");
        n.src = "./@rd0640ba8400cbacd5b8932cb!.js?v=20260923-voice-relay-v1", n.onload = () => e(), n.onerror = () => {
          n.remove(), me = null, t(new Error("Compatibility audio could not load."));
        }, document.head.append(n);
      })), me));
    } catch {
      return void (y.voiceSessionId === t && (y.voiceAudioStarting = !1, y.voiceAudioStatus = "Compatibility voice unavailable", 
      E("Compatibility audio could not load. Reload Chat and try again.")));
    }
    if (y.voiceSessionId !== t) return;
    const n = new window.NyxVoiceRelay({
      stream: y.voiceStream,
      audioContext: y.audioContext,
      exchange: n => async function(t, n) {
        if (n !== y.voiceSessionId) throw new Error("Voice session ended.");
        const a = {
          sessionId: n,
          transport: y.voiceTransport,
          frames: t
        };
        if ("http" !== le() && Date.now() > y.voiceHttpUntil && y.socketConnected && "websocket" === y.socket?.io?.engine?.transport?.name) try {
          return {
            ...await new Promise((e, t) => y.socket.timeout(1200).emit("nyx:voice:audio", a, (n, a) => {
              n ? t(n) : a?.ok ? e(a) : t(Object.assign(new Error(a?.error || "Voice unavailable"), {
                status: a?.status
              }));
            })),
            transport: "socket"
          };
        } catch (r) {
          if ([ 401, 403, 409, 429 ].includes(r.status)) throw r;
          y.voiceHttpUntil = Date.now() + 3e4;
        }
        if (n !== y.voiceSessionId) throw new Error("Voice session ended.");
        const o = new AbortController, i = setTimeout(() => o.abort(), 2500);
        try {
          const t = await fetch(`${e}/voice/audio`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${y.token}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify(a),
            signal: o.signal,
            cache: "no-store"
          }), n = await t.json();
          if (!t.ok) throw Object.assign(new Error(n.error || "Voice unavailable"), {
            status: t.status
          });
          return {
            ...n,
            transport: "http"
          };
        } finally {
          clearTimeout(i);
        }
      }(n, t),
      muted: () => y.voiceMuted,
      deafened: () => y.voiceDeafened,
      denied: () => {
        y.voiceSessionId === t && (Re({
          notifyServer: !1
        }), E("Voice access changed. Rejoin an available channel."));
      },
      accept: e => y.voiceParticipants.some(t => t.uid === e.fromUid && t.sessionId === e.fromSessionId && t.channelId === y.voiceChannelId && ue(t)),
      status: e => {
        y.voiceSessionId === t && (y.voiceAudioStatus = e, ye());
      }
    });
    n.sequence = y.voiceSequence, y.voiceAudio = n;
    try {
      await n.start(), y.voiceSessionId === t && y.voiceAudio === n || n.close();
    } catch {
      n.close(), y.voiceAudio === n && (y.voiceAudio = null, y.voiceAudioStatus = "Compatibility voice unavailable", 
      E("This browser could not start compatibility audio. Check microphone permissions and try another browser."));
    } finally {
      y.voiceSessionId === t && (y.voiceAudioStarting = !1);
    }
  }
  function ge(e) {
    const t = y.members.find(t => t.uid === e?.uid);
    return t ? {
      ...e,
      ...t,
      channelId: e?.channelId,
      sessionId: e?.sessionId
    } : e;
  }
  function ve() {
    const e = y.audioContext;
    e && (document.querySelectorAll("audio[data-voice-uid]").forEach(t => {
      if (t.srcObject) {
        if (!t._nyxVoiceGain) try {
          const n = e.createMediaStreamSource(t.srcObject), a = e.createGain(), o = e.createDynamicsCompressor();
          a.gain.value = 2.4, o.threshold.value = -16, o.knee.value = 18, o.ratio.value = 4, 
          o.attack.value = .004, o.release.value = .18, n.connect(a), a.connect(o), o.connect(e.destination), 
          t._nyxVoiceSource = n, t._nyxVoiceGain = a, t._nyxVoiceCompressor = o;
        } catch {
          return;
        }
        t._nyxVoiceGain.gain.value = y.voiceDeafened ? 0 : 2.4, t.muted = !0;
      }
    }), e.resume().catch(() => {}));
  }
  function ye() {
    const e = y.voiceChannels.find(e => e.id === y.voiceChannelId);
    v.voicePanel.hidden = !y.voiceChannelId;
    const t = document.querySelector("[data-voice-transport]");
    var n, a;
    t && (t.disabled = Boolean(y.voiceChannelId) || y.voiceBusy), v.voiceStatus.textContent = y.voiceAudioStatus || (y.voicePolling ? "Voice reconnecting\u2026" : y.voiceScreenStream ? "Sharing screen" : "Voice connected"), 
    v.voiceRoom.textContent = e?.name || "", v.voiceMute.classList.toggle("active", y.voiceMuted), 
    v.voiceMute.setAttribute("aria-label", y.voiceMuted ? "Unmute microphone" : "Mute microphone"), 
    v.voiceMute.title = y.voiceMuted ? "Unmute microphone" : "Mute microphone", n = v.voiceMute, 
    a = y.voiceMuted ? "mic-off" : "mic", n.querySelector("use")?.setAttribute("href", `#icon-${a}`), 
    v.voiceDeafen.classList.toggle("active", y.voiceDeafened), v.voiceDeafen.setAttribute("aria-label", y.voiceDeafened ? "Undeafen" : "Deafen"), 
    v.voiceDeafen.title = y.voiceDeafened ? "Undeafen" : "Deafen", v.voiceScreen.classList.toggle("active", Boolean(y.voiceScreenStream)), 
    v.voiceScreen.disabled = "relay" === y.voiceTransport || !window.RTCPeerConnection || !y.voiceChannelId || y.voiceScreenBusy || !navigator.mediaDevices?.getDisplayMedia, 
    v.voiceScreen.setAttribute("aria-label", y.voiceScreenStream ? "Stop sharing screen" : "Share screen"), 
    v.voiceScreen.title = y.voiceScreenStream ? "Stop sharing screen" : "Share screen";
  }
  function we() {
    v.voiceChannelList.replaceChildren(), y.voiceChannels.forEach(e => {
      const t = document.createElement("div");
      t.className = "voice-channel";
      const n = y.voiceParticipants.filter(t => t.channelId === e.id), a = document.createElement("button");
      a.type = "button", a.className = "voice-channel-button" + (y.voiceChannelId === e.id ? " connected" : ""), 
      a.title = e.description || `Join ${e.name}`;
      const o = document.createElementNS("http://www.w3.org/2000/svg", "svg"), i = document.createElementNS("http://www.w3.org/2000/svg", "use");
      i.setAttribute("href", "#icon-volume"), o.append(i);
      const r = document.createElement("strong");
      r.textContent = e.name;
      const s = document.createElement("span");
      if (s.textContent = n.length ? String(n.length) : "", a.append(o, r, s), a.addEventListener("click", () => {
        qe(e.id);
      }), t.append(a), n.length) {
        const e = document.createElement("div");
        e.className = "voice-participant-list", n.forEach(t => {
          const n = ge(t), a = document.createElement("button");
          a.type = "button", a.className = "voice-member" + (t.uid === y.me?.uid ? " self" : ""), 
          a.append(L(n, !0));
          const o = document.createElement("span");
          o.append(z(n, t.uid === y.me?.uid ? `${n.displayName} (You)` : n.displayName)), 
          a.append(o), a.addEventListener("click", e => {
            e.stopPropagation(), ce(n);
          }), e.append(a);
        }), t.append(e);
      }
      v.voiceChannelList.append(t);
    }), ye();
  }
  function be(e) {
    e && (clearTimeout(e.screenMuteTimer), e.screenMuteTimer = 0, e.screenCard && (e.screenVideo.srcObject = null, 
    e.screenCard.remove(), e.screenCard = null, e.screenVideo = null, v.voiceScreenStage.hidden = !v.voiceScreenStage.children.length));
  }
  function Se(e) {
    const t = y.voicePeers.get(e);
    if (t) {
      clearTimeout(t.restartTimer), clearTimeout(t.fallbackTimer);
      try {
        t.connection.ontrack = null, t.connection.onicecandidate = null, t.connection.onconnectionstatechange = null, 
        t.connection.oniceconnectionstatechange = null, t.connection.close();
      } catch {}
      if (t.audio) {
        try {
          t.audio._nyxVoiceSource?.disconnect(), t.audio._nyxVoiceGain?.disconnect(), t.audio._nyxVoiceCompressor?.disconnect();
        } catch {}
        t.audio.srcObject = null, t.audio.remove();
      }
      be(t), y.voicePeers.delete(e);
    }
  }
  function Ce() {
    [ ...y.voicePeers.keys() ].forEach(Se);
  }
  async function xe(t, n) {
    if (!y.voiceSessionId) return;
    const a = {
      sessionId: y.voiceSessionId,
      toUid: t,
      ...n
    };
    try {
      if (y.socketConnected && y.socket) try {
        return void await new Promise((e, t) => y.socket.timeout(5e3).emit("nyx:voice:signal", a, (n, a) => {
          if (n) t(n); else if (a?.ok) e(); else {
            const e = new Error(a?.error || "The voice connection could not be relayed.");
            e.status = Number(a?.status || 0), t(e);
          }
        }));
      } catch (o) {
        if (o.status >= 400 && o.status < 500) throw o;
      }
      if (y.voiceSessionId !== a.sessionId) return;
      await F(`${e}/voice/signal`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(a)
      });
    } catch (o) {
      y.voiceSessionId === a.sessionId && 400 !== o.status && (v.voiceStatus.textContent = "Voice reconnecting...");
    }
  }
  function Ee(e, t) {
    const n = (e.operations || Promise.resolve()).then(() => {
      if ("closed" !== e.connection.signalingState) return t();
    });
    return e.operations = n.catch(() => {
      y.voiceSessionId && (v.voiceStatus.textContent = "Voice reconnecting...");
    }), e.operations;
  }
  function ke(e) {
    const t = String(e?.sdp || ""), n = t.match(/a=rtpmap:(\d+) opus\/48000(?:\/2)?/i);
    if (!n) return e;
    const a = n[1], o = new RegExp(`a=fmtp:${a} ([^\\r\\n]*)`, "i"), i = {
      useinbandfec: "1",
      usedtx: "0",
      maxaveragebitrate: "64000",
      maxplaybackrate: "48000",
      "sprop-maxcapturerate": "48000"
    };
    let r = t;
    return r = o.test(r) ? r.replace(o, (e, t) => {
      const n = new Map(String(t).split(";").map(e => e.trim()).filter(Boolean).map(e => {
        const t = e.indexOf("=");
        return t < 0 ? [ e.toLowerCase(), "" ] : [ e.slice(0, t).toLowerCase(), e.slice(t + 1) ];
      }));
      return Object.entries(i).forEach(([e, t]) => n.set(e, t)), `a=fmtp:${a} ${[ ...n ].map(([e, t]) => t ? `${e}=${t}` : e).join(";")}`;
    }) : r.replace(n[0], `${n[0]}\r\na=fmtp:${a} ${Object.entries(i).map(([e, t]) => `${e}=${t}`).join(";")}`), 
    {
      type: e.type,
      sdp: r
    };
  }
  async function $e(e) {
    try {
      const t = e.getParameters();
      if (!t.encodings?.length) return;
      t.encodings.forEach(e => {
        e.maxBitrate = 64e3, e.priority = "high", e.networkPriority = "high";
      }), await e.setParameters(t);
    } catch {}
  }
  async function Ae(e) {
    try {
      const t = e.getParameters();
      if (!t.encodings?.length) return;
      t.degradationPreference = "maintain-resolution", t.encodings.forEach(e => {
        e.maxBitrate = 25e5, e.maxFramerate = 30, e.priority = "medium", e.networkPriority = "high";
      }), await e.setParameters(t);
    } catch {}
  }
  async function Me(e, t = !1) {
    const n = y.voicePeers.get(e);
    if (n && !n.makingOffer && y.voiceSessionId) return Ee(n, async () => {
      if ("stable" === n.connection.signalingState) {
        n.makingOffer = !0;
        try {
          t && n.connection.setConfiguration({
            ...n.connection.getConfiguration(),
            iceServers: y.voiceIceServers
          });
          const a = ke(await n.connection.createOffer(t ? {
            iceRestart: !0
          } : void 0));
          await n.connection.setLocalDescription(a), Promise.all(n.connection.getSenders().map(e => "audio" === e.track?.kind ? $e(e) : "video" === e.track?.kind ? Ae(e) : null)), 
          await xe(e, {
            type: "offer",
            description: {
              type: n.connection.localDescription.type,
              sdp: n.connection.localDescription.sdp
            }
          });
        } finally {
          n.makingOffer = !1;
        }
      }
    });
  }
  function Ne(e, t = !1) {
    if (ue(e)) return Se(e.uid), null;
    const n = y.voicePeers.get(e.uid);
    if (n && n.sessionId === e.sessionId) return n;
    let a;
    n && Se(e.uid);
    try {
      a = new RTCPeerConnection({
        iceServers: y.voiceIceServers,
        bundlePolicy: "max-bundle",
        rtcpMuxPolicy: "require",
        iceCandidatePoolSize: 0
      });
    } catch {
      return he(), null;
    }
    const o = document.createElement("audio");
    o.autoplay = !0, o.playsInline = !0, o.muted = y.voiceDeafened, o.volume = 1, o.hidden = !0, 
    o.dataset.voiceUid = e.uid, document.body.append(o);
    const i = {
      connection: a,
      audio: o,
      sessionId: e.sessionId,
      pendingCandidates: [],
      makingOffer: !1,
      restartTimer: 0,
      screenSender: null,
      screenCard: null,
      screenVideo: null
    };
    y.voicePeers.set(e.uid, i), i.fallbackTimer = setTimeout(() => {
      "connected" !== a.connectionState && he();
    }, 12e3), y.voiceStream?.getAudioTracks().forEach(e => {
      e.contentHint = "speech";
      let t = null;
      try {
        t = a.addTrack(e, y.voiceStream);
        const n = a.getTransceivers().find(e => e.sender === t), o = window.RTCRtpSender?.getCapabilities?.("audio"), i = Array.isArray(o?.codecs) ? o.codecs : [], r = i.filter(e => "audio/opus" === String(e.mimeType || "").toLowerCase());
        r.length && "function" == typeof n?.setCodecPreferences && n.setCodecPreferences([ ...r, ...i.filter(e => !r.includes(e)) ]);
      } catch {
        t || (t = a.addTrack(e, y.voiceStream));
      }
      t && $e(t);
    });
    const r = y.voiceScreenStream?.getVideoTracks()[0];
    r && (i.screenSender = a.addTrack(r, y.voiceScreenStream), Ae(i.screenSender)), 
    a.onicecandidate = t => {
      t.candidate && xe(e.uid, {
        type: "candidate",
        candidate: t.candidate.toJSON ? t.candidate.toJSON() : t.candidate
      });
    }, a.ontrack = t => {
      if ("video" === t.track.kind) {
        const n = t.streams[0] || new MediaStream([ t.track ]);
        return function(e, t, n) {
          be(e);
          const a = document.createElement("article");
          a.className = "voice-screen-card";
          const o = document.createElement("video");
          o.autoplay = !0, o.playsInline = !0, o.muted = !0, o.srcObject = n;
          const i = document.createElement("span");
          i.textContent = `${t.displayName || t.handle || "Nyx member"}'s screen`, a.append(o, i), 
          v.voiceScreenStage.append(a), v.voiceScreenStage.hidden = !1, e.screenCard = a, 
          e.screenVideo = o, n.getVideoTracks().forEach(t => {
            t.addEventListener("ended", () => be(e), {
              once: !0
            }), t.addEventListener("mute", () => {
              clearTimeout(e.screenMuteTimer), e.screenMuteTimer = setTimeout(() => be(e), 1500);
            }), t.addEventListener("unmute", () => {
              clearTimeout(e.screenMuteTimer), e.screenMuteTimer = 0;
            });
          }), o.play().catch(() => {});
        }(i, e, n), void t.track.addEventListener("ended", () => be(i), {
          once: !0
        });
      }
      try {
        "jitterBufferTarget" in t.receiver && (t.receiver.jitterBufferTarget = 120);
      } catch {}
      o.srcObject = t.streams[0] || new MediaStream([ t.track ]), o.muted = y.voiceDeafened, 
      o.play().catch(() => {});
    };
    const s = () => {
      const t = a.connectionState;
      clearTimeout(i.restartTimer), ("failed" === t || "disconnected" === t) && y.me?.uid.localeCompare(e.uid) < 0 ? i.restartTimer = setTimeout(() => {
        Me(e.uid, !0);
      }, "failed" === t ? 500 : 2500) : "connected" === t && (clearTimeout(i.fallbackTimer), 
      i.fallbackTimer = 0, v.voiceStatus.textContent = y.voiceScreenStream ? "Sharing screen" : "Voice connected"), 
      "failed" !== t && "disconnected" !== t || i.fallbackTimer ? "closed" === t && Se(e.uid) : i.fallbackTimer = setTimeout(() => {
        he();
      }, 8e3);
    };
    return a.onconnectionstatechange = s, a.oniceconnectionstatechange = s, t && setTimeout(() => {
      Me(e.uid);
    }, 0), i;
  }
  async function Te(e) {
    if (!y.voiceSessionId || e?.toSessionId && e.toSessionId !== y.voiceSessionId) return;
    const t = String(e?.id || "");
    if (t && y.voiceSignalIds.has(t)) return;
    t && (y.voiceSignalIds.add(t), y.voiceSignalIds.size > 500 && y.voiceSignalIds.delete(y.voiceSignalIds.values().next().value));
    const n = ge(e.from || y.voiceParticipants.find(t => t.uid === e.fromUid));
    if (!n?.uid || n.uid === y.me?.uid || n.channelId !== y.voiceChannelId) return;
    const a = Ne(n, !1);
    return a ? Ee(a, async () => {
      if ("offer" === e.type) {
        const t = a.makingOffer || "stable" !== a.connection.signalingState, o = String(y.me?.uid || "").localeCompare(n.uid) > 0;
        if (a.ignoreOffer = t && !o, a.ignoreOffer) return;
        for (t && await a.connection.setLocalDescription({
          type: "rollback"
        }), await a.connection.setRemoteDescription(e.description); a.pendingCandidates.length; ) await a.connection.addIceCandidate(a.pendingCandidates.shift());
        const i = ke(await a.connection.createAnswer());
        await a.connection.setLocalDescription(i), Promise.all(a.connection.getSenders().map(e => "audio" === e.track?.kind ? $e(e) : "video" === e.track?.kind ? Ae(e) : null)), 
        await xe(n.uid, {
          type: "answer",
          description: {
            type: a.connection.localDescription.type,
            sdp: a.connection.localDescription.sdp
          }
        });
      } else if ("answer" === e.type) {
        if ("have-local-offer" !== a.connection.signalingState) return;
        for (await a.connection.setRemoteDescription(e.description), a.ignoreOffer = !1; a.pendingCandidates.length; ) await a.connection.addIceCandidate(a.pendingCandidates.shift());
      } else "candidate" !== e.type || a.ignoreOffer || (a.connection.remoteDescription ? await a.connection.addIceCandidate(e.candidate) : a.pendingCandidates.length < 128 && a.pendingCandidates.push(e.candidate));
    }) : void 0;
  }
  async function Le(e) {
    if (Array.isArray(e?.channels) && (y.voiceChannels = e.channels), Array.isArray(e?.participants) && (y.voiceParticipants = e.participants), 
    Array.isArray(e?.iceServers) && e.iceServers.length && (y.voiceIceServers = e.iceServers), 
    y.voiceRelayConfigured = !0 === e?.relayConfigured, y.voiceSessionId && !1 === e?.joined) return await Re({
      notifyServer: !1
    }), void E("The voice connection was reset. Join the channel again.");
    if (y.voiceChannelId) {
      const t = y.voiceParticipants.filter(e => e.channelId === y.voiceChannelId && e.uid !== y.me?.uid), n = new Set(t.map(e => e.uid));
      [ ...y.voicePeers.keys() ].filter(e => !n.has(e)).forEach(Se), t.forEach(e => Ne(e, String(y.me?.uid || "").localeCompare(e.uid) < 0));
      for (const a of Array.isArray(e?.signals) ? e.signals : []) await Te(a);
      fe();
    }
    we();
  }
  async function Ie() {
    if (y.voicePolling || !y.me) return;
    y.voicePolling = !0;
    const t = y.voiceSessionId;
    try {
      const n = y.voiceSessionId ? `?sessionId=${encodeURIComponent(y.voiceSessionId)}` : "", a = await F(`${e}/voice/state${n}`, {
        cache: "no-store"
      });
      if (t !== y.voiceSessionId) return;
      await Le(a);
    } catch (n) {
      401 === n.status ? dn() : y.voiceChannelId && (v.voiceStatus.textContent = "Voice reconnecting\u2026");
    } finally {
      y.voicePolling = !1, ye();
    }
  }
  function De(e = (y.voiceSessionId ? y.socketConnected ? 3e4 : 1500 : 5e3)) {
    clearTimeout(y.voicePollTimer), y.voicePollTimer = setTimeout(async () => {
      await Ie(), De();
    }, e);
  }
  async function qe(t) {
    if (!y.voiceBusy && y.voiceChannelId !== t) if (navigator.mediaDevices?.getUserMedia) {
      y.voiceBusy = !0;
      try {
        Z(), y.voiceSessionId && await Re();
        const n = await navigator.mediaDevices.getUserMedia({
          video: !1,
          audio: {
            echoCancellation: {
              ideal: !0
            },
            noiseSuppression: {
              ideal: !0
            },
            autoGainControl: {
              ideal: !0
            },
            channelCount: {
              ideal: 1
            },
            sampleRate: {
              ideal: 48e3
            },
            latency: {
              ideal: .04
            }
          }
        });
        n.getAudioTracks().forEach(e => {
          e.contentHint = "speech";
        });
        const a = (crypto.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}-${Math.random().toString(36).slice(2)}`).replace(/[^A-Za-z0-9_-]/g, "");
        y.voiceStream = n, y.voiceSequence = 0, y.voiceHttpUntil = 0, y.voiceAudioStatus = "", 
        y.voiceTransport = "auto" === le() && window.RTCPeerConnection ? "webrtc" : "relay", 
        y.voiceSessionId = a, y.voiceChannelId = t, y.voiceMuted = !1, y.voiceDeafened = !1;
        const o = await F(`${e}/voice/join`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            channelId: t,
            sessionId: a,
            audioRelayVersion: 1,
            audioTransport: y.voiceTransport
          })
        });
        await Le(o), De(1500), k(), E(`Joined ${y.voiceChannels.find(e => e.id === t)?.name || "voice channel"}.`, "success");
      } catch (n) {
        pe(), y.voiceStream?.getTracks().forEach(e => e.stop()), y.voiceStream = null, y.voiceSessionId = "", 
        y.voiceChannelId = "", Ce(), we(), "NotAllowedError" === n.name ? E("Allow microphone access to join a voice channel.") : E(n.message || "The voice channel could not be joined.");
      } finally {
        y.voiceBusy = !1, ye();
      }
    } else E("Voice channels are not supported by this browser.");
  }
  async function Pe({announce: e = !0} = {}) {
    const t = y.voiceScreenStream;
    t && (y.voiceScreenStream = null, t.getTracks().forEach(e => e.stop()), await Promise.all([ ...y.voicePeers.entries() ].map(async ([e, t]) => {
      t.screenSender && (t.connection.removeTrack(t.screenSender), t.screenSender = null), 
      await Me(e);
    })), ye(), e && E("Screen sharing stopped.", "success"));
  }
  async function Re({notifyServer: t = !0, resumePolling: n = !0} = {}) {
    const a = y.voiceSessionId;
    if (pe(), y.voiceAudioStatus = "", clearTimeout(y.voicePollTimer), y.voicePollTimer = 0, 
    y.voiceSessionId = "", y.voiceChannelId = "", y.voiceMuted = !1, y.voiceDeafened = !1, 
    y.voiceScreenStream && (y.voiceScreenStream.getTracks().forEach(e => e.stop()), 
    y.voiceScreenStream = null), Ce(), v.voiceScreenStage.replaceChildren(), v.voiceScreenStage.hidden = !0, 
    y.voiceStream?.getTracks().forEach(e => e.stop()), y.voiceStream = null, y.voiceParticipants = y.voiceParticipants.filter(e => e.uid !== y.me?.uid), 
    we(), t && a) try {
      await F(`${e}/voice/leave`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          sessionId: a
        })
      });
    } catch {}
    n && y.me && De(5e3);
  }
  function je() {
    y.voiceStream && (y.voiceMuted = !y.voiceMuted, y.voiceStream.getAudioTracks().forEach(e => {
      e.enabled = !y.voiceMuted;
    }), y.voiceAudio?.silence(), ye());
  }
  function Ue() {
    y.voiceChannelId && (y.voiceDeafened = !y.voiceDeafened, y.voicePeers.forEach(e => {
      e.audio.muted = y.voiceDeafened;
    }), ve(), y.voiceAudio?.silence(), ye());
  }
  function Oe(e = "") {
    const t = String(e).trim().toLowerCase();
    v.dmPickerList.replaceChildren(), y.members.filter(e => !e.self && (!t || `${e.displayName} ${e.handle}`.toLowerCase().includes(t))).forEach(e => {
      const t = document.createElement("button");
      t.type = "button", t.className = "member-button", t.append(L(e, e.online));
      const n = document.createElement("span"), a = document.createElement("strong");
      a.append(z(e));
      const o = document.createElement("small");
      o.textContent = `${e.handle} \xb7 ${e.roleLabel || O(e.role)}`, n.append(a, o), 
      t.append(n), t.addEventListener("click", () => {
        v.dmDialog.close(), ce(e);
      }), v.dmPickerList.append(t);
    });
  }
  function _e() {
    const e = S(), t = C();
    e ? (v.conversationSymbol.setAttribute("href", "#icon-hash"), v.channelTitle.textContent = e.name, 
    v.channelDescription.textContent = e.description, v.welcomeTitle.textContent = `Welcome to #${e.name.toLowerCase().replace(/\s+/g, "-")}`, 
    v.welcomeDescription.textContent = `This is the start of the ${e.name} channel.`, 
    v.input.placeholder = `Message #${e.name.toLowerCase().replace(/\s+/g, "-")}`) : t && (v.conversationSymbol.setAttribute("href", "#icon-lock"), 
    v.channelTitle.replaceChildren(z(t.other)), v.channelDescription.textContent = `Private conversation with ${t.other.handle}`, 
    v.welcomeTitle.textContent = `Message ${t.other.displayName}`, v.welcomeDescription.textContent = "Only the two of you can read this conversation.", 
    v.input.placeholder = `Message ${t.other.displayName}`), e?.locked && (v.channelDescription.textContent = "Locked ? Only moderators and higher roles can send"), 
    Jt();
  }
  function ze(e, t) {
    const n = y.messages.get(e) || [], a = new Map(n.map(e => [ e.id, e ]));
    t.forEach(e => a.set(e.id, e));
    const o = [ ...a.values() ].sort((e, t) => Number(e.createdAtMs || 0) - Number(t.createdAtMs || 0));
    return y.messages.set(e, o), o;
  }
  function Be() {
    const e = document.querySelector("[data-image-lightbox]");
    if (!e?.open) return;
    e.close();
    const t = e.querySelector("[data-image-lightbox-image]");
    t && (t.removeAttribute("src"), t.alt = "");
  }
  function Ve(e) {
    return String(e?.text || e?.attachmentName || "Message").replace(/\s+/g, " ").trim().slice(0, 180) || "Message";
  }
  function Je() {
    v.replyPreview.replaceChildren();
    const e = y.replyingTo;
    if (!e) return void (v.replyPreview.hidden = !0);
    const t = document.createElement("span"), n = document.createElement("strong");
    n.textContent = `Replying to ${e.author?.displayName || e.author?.handle || "Nyx member"}`;
    const a = document.createElement("small");
    a.textContent = Ve({
      text: e.text,
      attachmentName: e.attachments?.[0]?.name
    }), t.append(n, a);
    const o = V("close", "composer-reply-cancel", "Cancel reply");
    o.addEventListener("click", () => {
      y.replyingTo = null, Je(), v.input.focus();
    }), v.replyPreview.append(t, o), v.replyPreview.hidden = !1;
  }
  function Ge() {
    Fe();
    const e = b(), t = (y.messages.get(e) || []).filter(e => !N.muted(e.author?.uid)), n = new Map([ ...v.messageList.children ].map(e => [ String(e.dataset.messageId || ""), e ])), a = new Set, o = JSON.stringify(y.members.map(e => [ e.uid, e.displayName, e.handle, e.avatarUrl, e.avatarDecoration, e.profileEffect, e.role, e.customRole, e.caffeine ]));
    let i = null;
    t.forEach((e, t) => {
      const r = !e.replyTo && i && i.author?.uid === e.author?.uid && Number(e.createdAtMs) - Number(i.createdAtMs) < 3e5, c = JSON.stringify([ r, e, o ]), d = n.get(String(e.id));
      if (d?._nyxRenderSignature === c) {
        const n = v.messageList.children[t];
        return n !== d && v.messageList.insertBefore(d, n || null), a.add(d), void (i = e);
      }
      const l = document.createElement("article");
      l.className = `message role-${String(e.author?.role || "member")}${r ? " grouped" : ""}${e.pending ? " pending" : ""}`, 
      l.dataset.messageId = e.id, l._nyxRenderSignature = c, l.addEventListener("contextmenu", t => {
        t.preventDefault(), function(e, t) {
          Fe(), Ke(), y.contextMessage = t;
          const n = document.createElement("div");
          if (n.className = "message-context-reactions", s.slice(0, 5).forEach(e => {
            const a = document.createElement("button");
            a.type = "button", a.textContent = e, a.setAttribute("aria-label", `React ${e}`), 
            a.addEventListener("click", () => {
              Fe(), Qe(t, e);
            }), n.append(a);
          }), v.messageContextMenu.append(n), t.pending || v.messageContextMenu.append(He("All emojis", "smile", () => Ze(0, t))), 
          t.pending || v.messageContextMenu.append(He("Reply", "reply", () => function(e) {
            Fe(), y.replyingTo = e, Je(), v.input.focus(), v.input.setSelectionRange(v.input.value.length, v.input.value.length);
          }(t))), t.text && v.messageContextMenu.append(He("Copy text", "copy", () => Ye(t.text, "Message copied."))), 
          v.messageContextMenu.append(He("Copy message ID", "copy", () => Ye(t.id, "Message ID copied."))), 
          function(e) {
            return e.author?.uid === y.me?.uid || "channel" === y.active.type && B();
          }(t)) {
            const e = document.createElement("div");
            e.className = "message-context-divider", v.messageContextMenu.append(e, He("Delete message", "trash", () => Lt(t), {
              danger: !0
            }));
          }
          v.messageContextMenu.hidden = !1;
          const a = v.messageContextMenu.getBoundingClientRect(), o = Math.max(8, Math.min(e.clientX, window.innerWidth - a.width - 8)), i = Math.max(8, Math.min(e.clientY, window.innerHeight - a.height - 8));
          v.messageContextMenu.style.left = `${o}px`, v.messageContextMenu.style.top = `${i}px`, 
          v.messageContextMenu.querySelector("button")?.focus();
        }(t, e);
      });
      const m = L(e.author), u = y.members.find(t => t.uid === e.author?.uid) || (e.author?.uid ? e.author : null);
      u && (m.classList.add("profile-link"), m.tabIndex = 0, m.setAttribute("role", "button"), 
      m.setAttribute("aria-label", `View ${u.displayName || "member"} profile`), m.addEventListener("click", () => ce(u)), 
      m.addEventListener("keydown", e => {
        "Enter" !== e.key && " " !== e.key || (e.preventDefault(), ce(u));
      })), l.append(m);
      const p = document.createElement("div");
      p.className = "message-content", e.replyTo && !N.muted(e.replyTo.author?.uid) && p.append(function(e) {
        const t = document.createElement("button");
        t.type = "button", t.className = "message-reply-reference", t.setAttribute("aria-label", `Jump to message from ${e?.author?.displayName || "Nyx member"}`);
        const n = document.createElement("strong");
        n.textContent = e?.author?.displayName || e?.author?.handle || "Nyx member";
        const a = document.createElement("span");
        return a.textContent = Ve(e), t.append(n, a), t.addEventListener("click", () => function(e) {
          const t = v.messageList.querySelector(`[data-message-id="${CSS.escape(String(e || ""))}"]`);
          t ? (t.scrollIntoView({
            block: "center",
            behavior: "smooth"
          }), t.classList.remove("reply-target"), requestAnimationFrame(() => {
            t.classList.add("reply-target"), setTimeout(() => t.classList.remove("reply-target"), 1400);
          })) : E("The original message is not loaded.");
        }(e?.id)), t;
      }(e.replyTo));
      const h = document.createElement("div");
      h.className = "message-meta";
      const f = document.createElement(u ? "button" : "span");
      if (f.className = "message-author", f.append(z(e.author)), u && (f.type = "button", 
      f.addEventListener("click", () => ce(u))), h.append(f), e.author?.role && "member" !== e.author.role) {
        const t = document.createElement("span");
        t.className = "message-role", U(t, O(e.author.role, e.author)), h.append(t);
      }
      e.author?.caffeine && h.append(J());
      const g = document.createElement("time");
      if (g.className = "message-time", g.dateTime = e.createdAt || "", g.textContent = e.pending ? "Sending\u2026" : I(e.createdAtMs), 
      h.append(g), p.append(h), e.text) {
        const t = document.createElement("p");
        t.className = "message-text", function(e, t) {
          const n = String(t || "").trim();
          R(e, t, {
            mentionMembers: new Map(y.members.map(e => [ String(e.handle || "").toLowerCase(), e ]))
          }), e.classList.contains("minecraft-formatted") && e.classList.add("minecraft-formatted-text"), 
          /\p{Extended_Pictographic}/u.test(n) && /^[\p{Extended_Pictographic}\p{Emoji_Component}\p{Emoji_Modifier_Base}\p{Emoji_Modifier}\u200D\uFE0F\s]+$/u.test(n) && e.classList.add("emoji-only");
        }(t, e.text), p.append(t);
      }
      if (e.attachments?.length) {
        const t = document.createElement("div");
        t.className = "message-attachments", e.attachments.forEach(e => t.append(function(e) {
          if (e.image) {
            const t = document.createElement("button");
            t.type = "button", t.className = "message-attachment image", t.setAttribute("aria-label", `Enlarge ${e.name || "image"}`);
            const n = document.createElement("span");
            return n.className = "attachment-loading", n.textContent = "Loading image\u2026", 
            t.append(n), K(e).then(a => {
              const o = document.createElement("img");
              o.alt = e.name, o.src = a, o.addEventListener("load", () => n.remove(), {
                once: !0
              }), o.addEventListener("error", () => {
                n.textContent = "Image unavailable";
              }, {
                once: !0
              }), t.append(o), t.addEventListener("click", () => function(e, t = "Chat image") {
                const n = document.querySelector("[data-image-lightbox]"), a = n?.querySelector("[data-image-lightbox-image]"), o = n?.querySelector("[data-image-lightbox-caption]");
                n && a && e && (a.src = e, a.alt = String(t || "Chat image"), o && (o.textContent = String(t || "Chat image")), 
                n.open || n.showModal());
              }(a, e.name));
            }).catch(() => {
              n.textContent = "Image unavailable";
            }), t;
          }
          if (e.audio || e.video) {
            const t = document.createElement("div");
            t.className = "message-attachment media " + (e.audio ? "audio" : "video");
            const n = document.createElement("span");
            n.className = "message-attachment-media-title";
            const a = document.createElement("strong");
            a.textContent = e.name;
            const o = document.createElement("small");
            o.textContent = D(e.size), n.append(a, o);
            const i = document.createElement(e.audio ? "audio" : "video");
            i.controls = !0, i.preload = "metadata", e.video && (i.playsInline = !0);
            const r = document.createElement("span");
            return r.className = "attachment-loading", r.textContent = `Loading ${e.audio ? "audio" : "video"}\u2026`, 
            t.append(n, r, i), K(e).then(e => {
              i.src = e, r.remove();
            }).catch(() => {
              r.textContent = (e.audio ? "Audio" : "Video") + " unavailable";
            }), t;
          }
          const t = document.createElement("button");
          t.type = "button", t.className = "message-attachment message-attachment-file";
          const n = document.createElementNS("http://www.w3.org/2000/svg", "svg"), a = document.createElementNS("http://www.w3.org/2000/svg", "use");
          a.setAttribute("href", "#icon-download"), n.append(a);
          const o = document.createElement("span"), i = document.createElement("strong");
          i.textContent = e.name;
          const r = document.createElement("small");
          return r.textContent = D(e.size), o.append(i, r), t.append(n, o), t.addEventListener("click", async () => {
            try {
              t.disabled = !0;
              const n = await K(e), a = document.createElement("a");
              a.href = n, a.download = e.name, document.body.append(a), a.click(), a.remove();
            } catch (n) {
              E(n.message);
            } finally {
              t.disabled = !1;
            }
          }), t;
        }(e))), p.append(t);
      }
      if (function(e, t) {
        const n = document.createElement("div");
        n.className = "message-reactions", (e.reactions || []).forEach(t => {
          const a = document.createElement("button");
          a.type = "button", a.className = "reaction-chip" + (t.self ? " self" : ""), a.textContent = t.emoji;
          const o = document.createElement("span");
          o.textContent = String(t.count), a.append(o), a.addEventListener("click", () => {
            Qe(e, t.emoji);
          }), n.append(a);
        }), n.childElementCount && t.append(n);
      }(e, p), l.append(p), r) {
        const t = document.createElement("time");
        t.className = "message-time-compact", t.textContent = I(e.createdAtMs, !0), l.append(t);
      }
      if (!e.pending) {
        const t = V("smile", "reaction-add", "Add reaction");
        t.addEventListener("click", t => {
          t.stopPropagation(), Ze(0, e);
        }), l.append(t);
      }
      if (!e.pending && (e.author?.uid === y.me?.uid || "channel" === y.active.type && B())) {
        const t = V("trash", "message-delete", "Delete message");
        t.addEventListener("click", () => {
          Lt(e);
        }), l.append(t);
      }
      d && d.replaceWith(l);
      const w = v.messageList.children[t];
      w !== l && v.messageList.insertBefore(l, w || null), a.add(l), i = e;
    }), [ ...v.messageList.children ].forEach(e => {
      a.has(e) || e.remove();
    }), v.loadOlder.hidden = !y.hasMore.get(e);
  }
  function Fe() {
    y.contextMessage = null, v.messageContextMenu.hidden = !0, v.messageContextMenu.replaceChildren();
  }
  async function Ye(e, t = "Copied.") {
    const n = String(e || "");
    try {
      await navigator.clipboard.writeText(n);
    } catch {
      const e = document.createElement("textarea");
      e.value = n, e.style.position = "fixed", e.style.opacity = "0", document.body.append(e), 
      e.select(), document.execCommand("copy"), e.remove();
    }
    E(t, "success");
  }
  function He(e, t, n, {danger: a = !1} = {}) {
    const o = document.createElement("button");
    o.type = "button", o.className = "message-context-action" + (a ? " danger" : ""), 
    o.setAttribute("role", "menuitem");
    const i = document.createElement("span");
    i.textContent = e;
    const r = document.createElementNS("http://www.w3.org/2000/svg", "svg"), s = document.createElementNS("http://www.w3.org/2000/svg", "use");
    return s.setAttribute("href", `#icon-${t}`), r.append(s), o.append(i, r), o.addEventListener("click", () => {
      Fe(), n();
    }), o;
  }
  let We = null;
  function Ke() {
    We?.();
  }
  function Ze(e, t) {
    Ke(), Fe();
    const n = {
      ...y.active
    }, a = document.activeElement, o = document.createElement("div");
    o.className = "reaction-picker", o.setAttribute("role", "dialog"), o.setAttribute("aria-modal", "true"), 
    o.setAttribute("aria-label", "Choose a reaction");
    const i = document.createElement("strong");
    i.textContent = "Choose a reaction";
    const r = document.createElement("button");
    r.type = "button", r.textContent = "\xd7", r.setAttribute("aria-label", "Close emoji picker"), 
    r.className = "reaction-picker-close";
    const s = document.createElement("input");
    s.type = "search", s.placeholder = "Search emojis", s.setAttribute("aria-label", "Search reaction emojis");
    const c = document.createElement("div");
    c.className = "reaction-emoji-grid", c.setAttribute("role", "group"), c.setAttribute("aria-label", "Emoji reactions");
    const l = globalThis.NYX_REACTION_EMOJIS || Object.entries(d).map(([e, t]) => ({
      name: e,
      emoji: t
    })), m = new Set, u = l.filter(e => !(!e.emoji || m.has(e.emoji) || (m.add(e.emoji), 
    0))), p = new AbortController, h = {
      signal: p.signal
    };
    We = () => {
      p.abort(), o.remove(), We = null, a?.isConnected && a.focus();
    };
    const f = () => {
      c.replaceChildren();
      const e = s.value.toLowerCase().replace(/[:_]/g, " ").trim(), a = document.createDocumentFragment();
      for (const o of u) {
        const i = o.name.replace(/_/g, " ");
        if (e && !i.includes(e) && !o.emoji.includes(e)) continue;
        const r = document.createElement("button");
        r.type = "button", r.textContent = o.emoji, r.title = i, r.setAttribute("aria-label", "React " + i), 
        r.addEventListener("click", () => {
          Ke(), Qe(t, o.emoji, n);
        }), a.append(r);
      }
      c.append(a), c.childElementCount || (c.textContent = "No matching emojis.");
    };
    s.addEventListener("input", f, h), r.addEventListener("click", Ke, h), o.append(i, r, s, c), 
    document.body.append(o), f(), s.focus(), document.addEventListener("pointerdown", e => {
      o.contains(e.target) || Ke();
    }, h), o.addEventListener("keydown", e => {
      if ("Escape" === e.key && (e.preventDefault(), Ke()), "Tab" === e.key) {
        const t = [ ...o.querySelectorAll("button,input") ], n = t[0], a = t.at(-1);
        e.shiftKey && document.activeElement === n ? (e.preventDefault(), a.focus()) : e.shiftKey || document.activeElement !== a || (e.preventDefault(), 
        n.focus());
      }
    }, h), window.addEventListener("resize", Ke, h), v.scroller.addEventListener("scroll", Ke, h);
  }
  async function Qe(t, n, a = {
    ...y.active
  }) {
    try {
      const o = await F(`${e}/messages/${encodeURIComponent(a.id)}/${encodeURIComponent(t.id)}/reactions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          emoji: n
        })
      });
      t.reactions = o.reactions || [], Ge();
    } catch (o) {
      E(o.message);
    }
  }
  function Xe() {
    const e = b(), t = y.messages.get(e) || [], n = "channel" === y.active.type ? Number(y.latestActivity[y.active.id] || 0) : Number(C()?.lastMessageAtMs || 0);
    y.lastRead[e] = Math.max(n, ...t.map(e => Number(e.createdAtMs || 0)), Date.now()), 
    function() {
      try {
        localStorage.setItem("nyx.chat.lastRead", JSON.stringify(y.lastRead));
      } catch {}
    }(), ie(), re();
  }
  async function et({initial: t = !1, older: n = !1, poll: a = !1, replace: o = !1} = {}) {
    if (!y.me) return;
    const i = {
      ...y.active
    }, r = b(i), s = [ ...y.messages.get(r) || [] ];
    let c = "channel" === i.type ? `?channel=${encodeURIComponent(i.id)}` : `?conversation=${encodeURIComponent(i.id)}`;
    if (n && s.length) c += `&before=${Math.max(1, Number(s[0].createdAtMs || 0))}`; else if (a && !o) {
      const e = s.length ? Number(s[s.length - 1].createdAtMs || 0) : 1;
      c += `&after=${Math.max(1, e - 1)}`;
    }
    const d = v.scroller.scrollHeight - v.scroller.scrollTop - v.scroller.clientHeight < 100, l = v.scroller.scrollHeight, m = await F(`${e}/messages${c}`, {
      cache: "no-store",
      signal: AbortSignal.timeout(1e4)
    });
    if (r !== b()) return;
    if (a && !t && y.loaded.has(r) && function(e, t, n) {
      const a = new Set(t.map(e => e.id)), o = Math.max(0, ...t.filter(e => !e.pending).map(e => Number(e.createdAtMs || 0)));
      for (const i of n) a.has(i.id) || Number(i.createdAtMs || 0) < o || !i.author?.uid || i.author.uid === y.me?.uid || (X(i.text) || i.replyTo?.author?.uid === y.me?.uid) && Q(`${"channel" === e.type ? "message" : "dm"}:${e.id}:${i.createdAtMs}`, "mention", {
        uid: i.author.uid,
        sender: i.author.displayName || "Someone",
        preview: i.text || i.attachments?.[0]?.name || ""
      });
    }(i, s, m.messages || []), o) {
      const e = new Set(s.map(e => e.id));
      y.messages.set(r, (y.messages.get(r) || []).filter(t => t.pending || !e.has(t.id)));
    }
    ze(r, m.messages || []), a && !o || y.hasMore.set(r, !0 === m.hasMore), y.loaded.add(r), 
    Ge(), n ? v.scroller.scrollTop = Math.max(0, v.scroller.scrollHeight - l) : (t || d) && requestAnimationFrame(() => {
      v.scroller.scrollTop = v.scroller.scrollHeight;
    });
    const u = (y.messages.get(r) || []).at(-1);
    u && "channel" === i.type && (y.latestActivity[i.id] = Math.max(Number(y.latestActivity[i.id] || 0), Number(u.createdAtMs || 0))), 
    document.hidden || Xe(), x("Live", "connected");
  }
  async function tt(e) {
    if ("channel" === e.type && !y.channels.some(t => t.id === e.id)) return;
    if ("dm" === e.type && !y.conversations.some(t => t.id === e.id)) return;
    if (b(e) === b()) return void k();
    y.active = {
      ...e
    }, y.files = [], y.replyingTo = null, ot(), Je(), _e(), ie(), re(), Ge(), k();
    const t = b();
    if (y.loaded.has(t)) Xe(), requestAnimationFrame(() => {
      v.scroller.scrollTop = v.scroller.scrollHeight;
    }); else {
      x("Loading");
      try {
        await et({
          initial: !0
        });
      } catch (n) {
        x("Offline", "error"), E(n.message);
      }
    }
  }
  function nt(e) {
    const t = String(e.type || "").toLowerCase();
    return g.has(t) ? t : String(f[String(e.name || "").split(".").pop()?.toLowerCase()] || "").toLowerCase();
  }
  function at(e) {
    const t = [ ...e ], n = [ ...y.files ];
    for (const a of t) {
      const e = nt(a);
      if (n.length >= 3) {
        E("You can attach up to 3 files.");
        break;
      }
      g.has(e) ? a.size < 1 || a.size > 8388608 ? E(`${a.name} must be 8 MB or smaller.`) : n.reduce((e, t) => e + t.file.size, 0) + a.size > 8388608 ? E("Attachments can total up to 8 MB per message.") : n.push({
        file: a,
        mime: e,
        status: ""
      }) : E(`${a.name} is not a supported attachment type.`);
    }
    y.files = n, v.attachmentInput.value = "", ot(), Jt();
  }
  function ot() {
    v.attachmentPreviews.replaceChildren(), y.files.forEach((e, t) => {
      const n = document.createElement("div");
      n.className = "attachment-preview";
      const a = document.createElementNS("http://www.w3.org/2000/svg", "svg"), o = document.createElementNS("http://www.w3.org/2000/svg", "use");
      o.setAttribute("href", "#icon-paperclip"), a.append(o);
      const i = document.createElement("span"), r = document.createElement("strong");
      r.textContent = e.file.name;
      const s = document.createElement("small");
      s.textContent = e.status || D(e.file.size), i.append(r, s);
      const c = V("close", "", "Remove attachment");
      c.addEventListener("click", () => {
        y.busy || (y.files.splice(t, 1), ot(), Jt());
      }), n.append(a, i, c), v.attachmentPreviews.append(n);
    }), v.attachmentPreviews.hidden = !y.files.length;
  }
  async function it(n, a) {
    if (n.id) return n.id;
    n.status = "Preparing\u2026", ot();
    const o = n.uploadId || (crypto.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`).replace(/[^A-Za-z0-9_-]/g, "");
    n.uploadId = o;
    const i = await (r = n.file, new Promise((e, t) => {
      const n = new FileReader;
      n.onerror = () => t(new Error(`Could not read ${r.name}.`)), n.onload = () => e(String(n.result || "").split(",")[1] || ""), 
      n.readAsDataURL(r);
    }));
    var r;
    const s = [];
    for (let e = 0; e < i.length; e += t) s.push(i.slice(e, e + t));
    let c = "";
    for (let t = 0; t < s.length; t++) n.status = `Uploading ${Math.round(t / s.length * 100)}%`, 
    ot(), c = (await F(`${e}/attachments/${encodeURIComponent(o)}/${t}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        totalChunks: s.length,
        mime: n.mime,
        name: n.file.name,
        size: n.file.size,
        chunk: s[t]
      })
    })).id || c;
    n.status = "Finishing\u2026", ot();
    const d = await F(`${e}/attachments/${encodeURIComponent(o)}/complete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: "{}"
    });
    if (n.id = d.attachment?.id || c, !n.id) throw new Error(`Could not finish ${n.file.name}.`);
    return n.status = `Ready ${a + 1}/${y.files.length}`, ot(), n.id;
  }
  function rt(e) {
    return String(e || "").replace(/:([a-z0-9_+-]{2,32}):/gi, (e, t) => d[String(t).toLowerCase()] || e);
  }
  function st(e) {
    return e.lock ? zt() : e.owner ? "owner" === y.me?.role : e.roles ? !0 === y.me?.canAssignRoles : e.network ? [ "owner", "co_owner", "admin" ].includes(y.me?.role) : e.manager ? !0 === y.me?.canManageChannels : !e.staff || B();
  }
  function ct() {
    const e = new Set(h.flatMap(e => [ e.name, ...e.aliases || [] ]));
    return y.customCommands.filter(t => t?.name && !e.has(t.name)).map(e => ({
      ...e,
      custom: !0,
      usage: `/${e.name}${e.response?.includes("{args}") ? " message" : ""}`,
      description: e.description || "Custom Nyx Chat response."
    }));
  }
  function dt() {
    return [ ...h, ...ct() ];
  }
  const lt = new Map, mt = new Map;
  let ut, pt = "";
  const ht = () => [ ...new Map([ ...y.members, ...lt.values() ].map(e => [ e.uid, e ])).values() ];
  async function ft(t) {
    if (t = String(t || "").replace(/^@/, "").toLowerCase(), !/^[a-z0-9_.-]{1,32}$/.test(t)) return;
    if (Date.now() - (mt.get(t) || 0) < 3e4) return;
    const n = await F(`${e}/members?search=${encodeURIComponent(t)}`, {
      cache: "no-store"
    });
    for (const e of n.members || []) lt.set(e.uid, e);
    mt.set(t, Date.now()), mt.size > 100 && mt.delete(mt.keys().next().value), lt.size > 200 && lt.delete(lt.keys().next().value);
  }
  function gt(e) {
    const t = String(e || "").trim().split(/\s+/)[0].toLowerCase();
    return t && ht().find(e => String(e.handle || "").toLowerCase() === t || String(e.handle || "").slice(1).toLowerCase() === t.replace(/^@/, "") || String(e.displayName || "").toLowerCase() === t.replace(/^@/, "")) || null;
  }
  function vt(e) {
    return (new TextEncoder).encode(String(e || ""));
  }
  function yt(e) {
    const t = vt(e);
    let n = "";
    return t.forEach(e => {
      n += String.fromCharCode(e);
    }), btoa(n);
  }
  function wt(e) {
    try {
      const t = atob(String(e || "").replace(/\s+/g, ""));
      return (new TextDecoder).decode(Uint8Array.from(t, e => e.charCodeAt(0)));
    } catch {
      throw new Error("Enter a valid Base64 value.");
    }
  }
  function bt(e) {
    const t = String(e || "").trim().match(/^(\d{1,4})(s|m|h)$/i);
    if (!t) throw new Error("Use a duration such as 30s, 10m, or 1h.");
    const n = Number(t[1]) * {
      s: 1e3,
      m: 6e4,
      h: 36e5
    }[t[2].toLowerCase()];
    if (n < 1e3 || n > 864e5) throw new Error("Choose a duration from 1 second through 24 hours.");
    return n;
  }
  function St(e) {
    return e % 36e5 == 0 ? e / 36e5 + "h" : e % 6e4 == 0 ? e / 6e4 + "m" : `${Math.round(e / 1e3)}s`;
  }
  function Ct(e, t) {
    const n = St(e);
    setTimeout(() => {
      E(t, "success"), Q(`timer:${Date.now()}`, "mention");
    }, e), E(`Timer set for ${n}. Keep this Chat tab open.`, "success");
  }
  function xt(e, t = "Text", n = 240) {
    const a = String(e || "");
    if (a.length > n) throw new Error(`${t} can be up to ${n} characters for this command.`);
    return a;
  }
  function Et(e) {
    return E(e, "success"), {
      handled: !0
    };
  }
  function kt() {
    v.customCommandForm?.reset(), v.customCommandPrevious && (v.customCommandPrevious.value = ""), 
    v.customCommandCancel && (v.customCommandCancel.hidden = !0), v.customCommandSave && (v.customCommandSave.textContent = "Save command");
  }
  function $t() {
    v.commandPrefix && (v.commandPrefix.value = r), v.commandList.replaceChildren(), 
    dt().filter(st).forEach(e => {
      const t = document.createElement("div");
      t.className = "command-list-item";
      const n = document.createElement("code");
      n.textContent = function(e) {
        return String(e || "").replace(/^\//, r);
      }(e.usage);
      const a = document.createElement("span");
      a.textContent = e.description, t.append(n, a), v.commandList.append(t);
    }), function() {
      if (!v.customCommandManager) return;
      const t = "owner" === y.me?.role;
      if (v.customCommandManager.hidden = !t, t) {
        if (v.customCommandList.replaceChildren(), !y.customCommands.length) {
          const e = document.createElement("p");
          return e.className = "custom-command-empty", e.textContent = "No custom commands yet.", 
          void v.customCommandList.append(e);
        }
        y.customCommands.forEach(t => {
          const n = document.createElement("div");
          n.className = "custom-command-item";
          const a = document.createElement("span"), o = document.createElement("strong");
          o.textContent = `${r}${t.name}`;
          const i = document.createElement("small");
          i.textContent = (t.aliases || []).length ? `Aliases: ${(t.aliases || []).map(e => r + e).join(", ")}` : t.description || "Custom response", 
          a.append(o, i);
          const s = document.createElement("button");
          s.type = "button", s.title = "Edit command", s.setAttribute("aria-label", `Edit ${t.name}`), 
          s.innerHTML = '<svg><use href="#icon-edit"/></svg>', s.addEventListener("click", () => function(e) {
            e && (v.customCommandPrevious.value = e.name, v.customCommandName.value = e.name, 
            v.customCommandAliases.value = (e.aliases || []).join(", "), v.customCommandDescription.value = e.description || "", 
            v.customCommandResponse.value = e.response || "", v.customCommandCancel.hidden = !1, 
            v.customCommandSave.textContent = "Update command", v.customCommandName.focus());
          }(t));
          const c = document.createElement("button");
          c.type = "button", c.className = "delete", c.title = "Delete command", c.setAttribute("aria-label", `Delete ${t.name}`), 
          c.innerHTML = '<svg><use href="#icon-trash"/></svg>', c.addEventListener("click", () => {
            !async function(t) {
              if ("owner" === y.me?.role && confirm(`Delete ${r}${t.name}?`)) try {
                const n = await F(`${e}/custom-commands`, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    action: "delete",
                    name: t.name
                  })
                });
                y.customCommands = Array.isArray(n.customCommands) ? n.customCommands : y.customCommands, 
                v.customCommandPrevious.value === t.name && kt(), $t(), jt(), E(`${r}${t.name} deleted.`, "success");
              } catch (n) {
                E(n.message);
              }
            }(t);
          }), n.append(a, s, c), v.customCommandList.append(n);
        });
      }
    }();
  }
  const At = F;
  async function Mt(t) {
    const n = String(t || "").match(/^\/([A-Za-z]+)(?:\s+([\s\S]*))?$/);
    if (!n) throw new Error("That command is not valid. Type /help to see Nyx commands.");
    const a = function(e) {
      const t = String(e || "").toLowerCase();
      return dt().find(e => e.name === t || (e.aliases || []).includes(t));
    }(n[1]);
    if (!a) throw new Error(`Unknown command /${n[1]}. Type /help to see Nyx commands.`);
    const o = String(n[2] || "").trim();
    if ("help" === a.name) return $t(), v.commandDialog.open || v.commandDialog.showModal(), 
    {
      handled: !0
    };
    if ("shrug" === a.name) return {
      text: `${o}${o ? " " : ""}\xaf\\_(\u30c4)_/\xaf`
    };
    if ("tableflip" === a.name) return {
      text: `${o}${o ? " " : ""}(\u256f\xb0\u25a1\xb0\uff09\u256f\ufe35 \u253b\u2501\u253b`
    };
    if ("unflip" === a.name) return {
      text: `${o}${o ? " " : ""}\u252c\u2500\u252c \u30ce( \u309c-\u309c\u30ce)`
    };
    if ("me" === a.name) {
      if (!o) throw new Error("Add an action after /me.");
      return {
        text: `* ${y.me?.displayName || "Nyx member"} ${o}`
      };
    }
    if ("who" === a.name) {
      const e = y.members.filter(e => e.online);
      return E(e.length ? `Online: ${e.map(e => e.displayName).join(", ")}` : "No other members are online.", "success"), 
      {
        handled: !0
      };
    }
    if ("ping" === a.name) {
      const t = performance.now();
      return await F(`${e}/conversations`, {
        cache: "no-store"
      }), E(`Nyx Chat API: ${Math.max(1, Math.round(performance.now() - t))} ms.`, "success"), 
      {
        handled: !0
      };
    }
    if ("dm" === a.name) {
      const t = gt(o);
      if (!t || t.self) throw new Error("Choose another member, for example /dm @person.");
      const n = o.split(/\s+/).slice(1).join(" ");
      return await async function(t) {
        const n = (await F(`${e}/conversations`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            participantUid: t.uid
          })
        })).conversation;
        if (!n) throw new Error("The private conversation could not be opened.");
        ee([ n, ...y.conversations.filter(e => e.id !== n.id) ]), await tt({
          type: "dm",
          id: n.id
        });
      }(t), {
        handled: !0,
        input: n
      };
    }
    if ("giftcaffeine" === a.name) {
      const t = gt(o);
      if (!t || t.self) throw new Error("Choose another member, for example /giftcaffeine @person.");
      const n = await F(`${e}/caffeine/gifts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          recipientUid: t.uid
        })
      });
      return y.caffeine = n.caffeine || y.caffeine, Ht(), E(`Caffeine gift sent to ${t.displayName}.`, "success"), 
      {
        handled: !0
      };
    }
    if ([ "tempban", "untempban", "duration", "tempbans" ].includes(a.name)) return await async function(t, n) {
      if (!B()) throw new Error("You do not have permission to use that command.");
      if ("list" === t) {
        const t = await F(`${e}/moderation/temp-bans`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            action: "list"
          })
        }), n = Array.isArray(t.bans) ? t.bans : [];
        return void E(n.length ? `Active temporary bans: ${n.map(e => `${e.targetDisplayName} (${Math.max(1, Math.ceil((Number(e.expiresAtMs) - Date.now()) / 6e4))}m)`).join(" \xb7 ")}` : "There are no active temporary bans.", "success");
      }
      if ("untempban" === t) {
        const t = gt(n);
        if (!t) throw new Error("Choose a member, for example /untempban @person.");
        if (t.self) throw new Error("You cannot lift your own temporary ban.");
        if (!confirm(`Lift ${t.displayName}'s temporary ban?`)) return;
        return await F(`${e}/moderation/temp-bans`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            action: "untempban",
            targetUid: t.uid
          })
        }), void E(`${t.displayName}'s temporary ban was lifted.`, "success");
      }
      const {member: a, duration: o, reason: i} = function(e, t) {
        const [n, a, ...o] = String(e || "").trim().split(/\s+/), i = gt(n);
        if (!i) throw new Error(`Choose a member, for example /${t} @person 1h.`);
        if (i.self) throw new Error(`You cannot use /${t} on yourself.`);
        if (!a) throw new Error(`Add a duration after the member, for example /${t} @person 1h.`);
        return {
          member: i,
          duration: a,
          reason: o.join(" ").trim()
        };
      }(n, "duration" === t ? "duration" : "tempban");
      if ("duration" === t) {
        const t = await F(`${e}/moderation/temp-bans`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            action: "duration",
            targetUid: a.uid,
            duration: o
          })
        });
        return void E(`${a.displayName}'s temporary ban now ends ${new Date(t.ban?.expiresAtMs || 0).toLocaleString()}.`, "success");
      }
      let r = i;
      if (!r) {
        const e = prompt(`Why are you temporarily banning ${a.displayName}?`, "");
        if (null === e) return;
        r = e.trim();
      }
      if (!r) throw new Error("A reason is required.");
      if (r.length > 500) throw new Error("Keep the temporary-ban reason to 500 characters or fewer.");
      if (!confirm(`Temporarily ban ${a.displayName} for ${o}?`)) return;
      const s = await F(`${e}/moderation/temp-bans`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          action: "tempban",
          targetUid: a.uid,
          duration: o,
          reason: r
        })
      });
      E(`${a.displayName} is banned until ${new Date(s.ban?.expiresAtMs || 0).toLocaleString()}.`, "success");
    }("tempbans" === a.name ? "list" : a.name, o), {
      handled: !0
    };
    if ("warn" === a.name) {
      const t = gt(o);
      if (!t) throw new Error("Choose a member, for example /warn @person reason.");
      return await async function(t, n) {
        if (!B()) throw new Error("You do not have permission to use that command.");
        if (t.self) throw new Error("You cannot warn yourself.");
        let a = n.split(/\s+/).slice(1).join(" ").trim();
        if (!a) {
          const e = prompt(`Why are you warning ${t.displayName}?`, "");
          if (null === e) return;
          a = e.trim();
        }
        if (!a) throw new Error("A reason is required.");
        if (a.length > 500) throw new Error("Keep the warning reason to 500 characters or fewer.");
        const o = await F(`${e}/moderation/warnings`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            targetUid: t.uid,
            reason: a
          })
        });
        o.conversation && ee([ o.conversation, ...y.conversations.filter(e => e.id !== o.conversation.id) ]), 
        E(`Official warning sent privately to ${t.displayName}.`, "success");
      }(t, o), {
        handled: !0
      };
    }
    if ("demote" === a.name) {
      const e = gt(o);
      if (!e) throw new Error("Choose a member, for example /demote @person.");
      return await async function(e) {
        if (!y.me?.canAssignRoles) throw new Error("You do not have permission to demote members.");
        if (e.self) throw new Error("You cannot demote yourself.");
        const t = String(e.role || "member"), n = u.indexOf(t);
        if (n < 0 || n === u.length - 1) throw new Error(`${e.displayName} is already at the lowest built-in role.`);
        const a = u[n + 1];
        confirm(`Demote ${e.displayName} from ${O(t)} to ${O(a)}?`) && (await F(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/users/${encodeURIComponent(e.uid)}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            action: "set_role",
            role: a
          })
        }), E(`${e.displayName} was demoted to ${O(a)}.`, "success"), await Zt());
      }(e), {
        handled: !0
      };
    }
    if ([ "ban", "ipban", "unban" ].includes(a.name)) {
      const e = gt(o);
      if (!e) throw new Error(`Choose a member, for example /${a.name} @person.`);
      const t = "ban" === a.name ? "ban" : "ipban" === a.name ? "disable_with_ip_ban" : "enable", n = o.split(/\s+/).slice(1).join(" ");
      return await async function(e, t, n, a = "") {
        if (!B()) throw new Error("You do not have permission to use that command.");
        if (e.self) throw new Error("You cannot use that command on yourself.");
        let o = String(a || "").trim();
        if ("enable" !== t && !o) {
          const t = prompt(`What message should ${e.displayName} see when they try to sign in?`, "");
          if (null === t) return;
          o = t.trim();
        }
        if ("enable" !== t && !o) throw new Error("Enter a message explaining this account action.");
        if (o.length > 500) throw new Error("Keep the member-facing message to 500 characters or fewer.");
        confirm(`${n} ${e.displayName}?`) && (await F(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/users/${encodeURIComponent(e.uid)}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            action: t,
            reason: o
          })
        }), E(`${e.displayName}: ${n.toLowerCase()} completed.`, "success"));
      }(e, t, "ban" === a.name ? "Ban account" : "ipban" === a.name ? "Disable account and block recorded IP" : "Re-enable account", n), 
      {
        handled: !0
      };
    }
    if ("mute" === a.name || "unmute" === a.name) {
      const t = gt(o);
      if (!t) throw new Error(`Choose a member, for example /${a.name} @person.`);
      return await async function(t, n) {
        if (!B()) throw new Error("You do not have permission to use that command.");
        if (t.self) throw new Error("You cannot mute yourself.");
        const a = {
          action: n,
          targetUid: t.uid
        };
        if ("mute" === n) {
          const e = prompt(`How long should ${t.displayName} be muted?\nUse 10m, 2h, 1d, or 1w.`, "10m");
          if (null === e) return;
          const n = prompt(`Why are you muting ${t.displayName}?`, "");
          if (null === n) return;
          if (a.duration = e.trim(), a.reason = n.trim(), !a.duration) throw new Error("Enter how long the mute should last.");
          if (!a.reason) throw new Error("A reason is required.");
        }
        const o = await F(`${e}/moderation/mutes`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(a)
        });
        if (o.muted) {
          const e = new Date(o.mute?.expiresAtMs || 0).toLocaleString();
          E(`${t.displayName} is muted until ${e}.`, "success");
        } else E(`${t.displayName} can send messages again.`, "success");
      }(t, a.name), {
        handled: !0
      };
    }
    if ("lock" === a.name || "unlock" === a.name) return await async function(t) {
      const n = S();
      if (!n) throw new Error("Use this command inside a text channel.");
      if (!zt()) throw new Error("Only moderators and higher roles can lock or unlock channels.");
      const a = await F(`${e}/channels/lock`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          channel: n.id,
          locked: "moderator" === t
        })
      });
      n.locked = !0 === a.locked;
      const o = y.channels.find(e => e.id === n.id);
      o && (o.locked = n.locked), _e(), ie(), E(n.locked ? "Channel locked. Members can still read; only moderators and higher roles can send." : "Channel unlocked. Members can send again.", "success");
    }("lock" === a.name ? "moderator" : "member"), {
      handled: !0
    };
    if ("join" === a.name) {
      const e = o.toLowerCase().replace(/^#/, ""), t = y.voiceChannels.find(t => t.id === e || t.name.toLowerCase() === e);
      if (!t) throw new Error("Choose a voice channel, for example /join Lounge.");
      return await qe(t.id), {
        handled: !0
      };
    }
    if ("disconnect" === a.name) return await Re(), {
      handled: !0
    };
    if ("micmute" === a.name || "micunmute" === a.name) {
      if (!y.voiceStream) throw new Error("Join a voice channel first.");
      return "micmute" === a.name !== y.voiceMuted && je(), {
        handled: !0
      };
    }
    if ("deafen" === a.name || "undeafen" === a.name) {
      if (!y.voiceChannelId) throw new Error("Join a voice channel first.");
      return "deafen" === a.name !== y.voiceDeafened && Ue(), {
        handled: !0
      };
    }
    throw new Error("That command is not available in Nyx Chat.");
  }
  function Nt(e, t) {
    y.messages.set(e, (y.messages.get(e) || []).filter(e => e.id !== t));
  }
  function Tt(e, t, n, a = "") {
    if (a && Nt(t, a), ze(t, [ n ]), "channel" === e.type) y.latestActivity[e.id] = Number(n?.createdAtMs || Date.now()); else {
      const t = y.conversations.find(t => t.id === e.id);
      t && (t.lastMessageAtMs = Number(n?.createdAtMs || Date.now()), t.lastMessageText = n?.text || `Attached ${n?.attachments?.length || 1} file`, 
      t.updatedAtMs = t.lastMessageAtMs, y.conversations.sort((e, t) => t.updatedAtMs - e.updatedAtMs), 
      re());
    }
    b(e) === b() && (Ge(), Xe(), requestAnimationFrame(() => {
      v.scroller.scrollTop = v.scroller.scrollHeight;
    }));
  }
  async function Lt(t) {
    if (confirm("Delete this message?")) try {
      await F(`${e}/messages/${encodeURIComponent(y.active.id)}/${encodeURIComponent(t.id)}`, {
        method: "DELETE"
      });
      const n = b();
      y.messages.set(n, (y.messages.get(n) || []).filter(e => e.id !== t.id)), (t.attachments || []).forEach(e => {
        const t = y.blobUrls.get(e.id);
        t && String(t).startsWith("blob:") && URL.revokeObjectURL(t), y.blobUrls.delete(e.id), 
        y.blobExpires.delete(e.id);
      }), Ge(), E("Message deleted.", "success");
    } catch (n) {
      E(n.message);
    }
  }
  F = async function(t, n = {}, a = !0, o = !0) {
    const i = await At(t, n, a, o);
    return t === `${e}/bootstrap` && (y.customRoles = Array.isArray(i?.customRoles) ? i.customRoles : [], 
    y.customCommands = Array.isArray(i?.customCommands) ? i.customCommands : []), i;
  };
  const It = Mt, Dt = Mt = async function(e) {
    const t = String(e || "").match(/^\/([A-Za-z]+)(?:\s+([\s\S]*))?$/), n = String(t?.[1] || "").toLowerCase(), a = String(t?.[2] || "").trim();
    /^(ban|ipban|unban|tempban|untempban|duration|warn|demote|mute|unmute)$/.test(n) && !gt(a) && await ft(a.split(/\s+/)[0]);
    const o = function(e, t) {
      if (!p.some(t => t.name === e)) return null;
      const n = (n = "message") => function(e, t, n = "message") {
        if (t) return t;
        throw new Error(`Add ${n} after /${e}.`);
      }(e, t, n);
      if ("say" === e) return {
        text: n()
      };
      if ("upper" === e) return {
        text: n().toLocaleUpperCase()
      };
      if ("lower" === e) return {
        text: n().toLocaleLowerCase()
      };
      if ("title" === e) return {
        text: n().toLocaleLowerCase().replace(/(^|\s)(\p{L})/gu, (e, t, n) => t + n.toLocaleUpperCase())
      };
      if ("reverse" === e) return {
        text: Array.from(n()).reverse().join("")
      };
      if ("clap" === e) return {
        text: n().split(/\s+/).join(" \ud83d\udc4f ")
      };
      if ("space" === e) return {
        text: Array.from(n()).join(" ")
      };
      if ("mock" === e) {
        let e = 0;
        return {
          text: Array.from(n(), t => /\p{L}/u.test(t) ? e++ % 2 ? t.toLocaleLowerCase() : t.toLocaleUpperCase() : t).join("")
        };
      }
      if ("quote" === e) return {
        text: `> ${n().replace(/\n/g, "\n> ")}`
      };
      if ("code" === e) return {
        text: `\`${n().replace(/`/g, "'")}\``
      };
      if ("bold" === e) return {
        text: `&l${n()}&r`
      };
      if ("italic" === e) return {
        text: `&o${n()}&r`
      };
      if ("underline" === e) return {
        text: `&n${n()}&r`
      };
      if ("strike" === e) return {
        text: `&m${n()}&r`
      };
      if ("rainbow" === e) {
        const e = [ "&c", "&6", "&e", "&a", "&b", "&9", "&d" ];
        let t = 0;
        return {
          text: Array.from(n(), n => /\s/u.test(n) ? n : `${e[t++ % e.length]}${n}`).join("") + "&r"
        };
      }
      if ("color" === e) {
        const e = t.match(/^&([0-9a-f])\s+([\s\S]+)$/i);
        if (!e) throw new Error("Use /color &d your message.");
        return {
          text: `&${e[1].toLowerCase()}${e[2]}&r`
        };
      }
      if ("formatcodes" === e) return Et("Colors: &0\u2013&9 and &a\u2013&f. Styles: &l bold, &o italic, &n underline, &m strike, &k magic, &r reset.");
      if ("binary" === e) {
        const e = xt(n("short text"), "Text", 100);
        return {
          text: Array.from(vt(e), e => e.toString(2).padStart(8, "0")).join(" ")
        };
      }
      if ("hex" === e) {
        const e = xt(n("short text"));
        return {
          text: Array.from(vt(e), e => e.toString(16).padStart(2, "0")).join(" ")
        };
      }
      if ("baseencode" === e) return {
        text: yt(xt(n("short text")))
      };
      if ("basedecode" === e) return {
        text: wt(xt(n("a Base64 value"), "Base64 input"))
      };
      if ("rot" === e) return {
        text: n().replace(/[a-z]/gi, e => String.fromCharCode(e.charCodeAt(0) + (e.toLowerCase() < "n" ? 13 : -13)))
      };
      if ("length" === e) return Et(`${Array.from(n("text")).length} characters.`);
      if ("words" === e) return Et(`${n("text").trim().split(/\s+/).filter(Boolean).length} words.`);
      if ("choose" === e) {
        const e = t.split("|").map(e => e.trim()).filter(Boolean);
        if (e.length < 2) throw new Error("Separate at least two choices with |.");
        return {
          text: `I choose: ${e[Math.floor(Math.random() * e.length)]}`
        };
      }
      if ("roll" === e) {
        const e = (t || "1d6").match(/^(\d{1,2})d(\d{1,4})$/i);
        if (!e) throw new Error("Use dice notation such as /roll 2d20.");
        const n = Math.min(20, Number(e[1])), a = Math.min(1e3, Number(e[2]));
        if (n < 1 || a < 2) throw new Error("Roll 1\u201320 dice with at least 2 sides.");
        const o = Array.from({
          length: n
        }, () => 1 + Math.floor(Math.random() * a));
        return {
          text: `\ud83c\udfb2 ${o.join(" + ")} = ${o.reduce((e, t) => e + t, 0)}`
        };
      }
      if ("coinflip" === e) return {
        text: Math.random() < .5 ? "\ud83e\ude99 Heads" : "\ud83e\ude99 Tails"
      };
      if ("magicball" === e) {
        n("a question");
        const e = [ "Yes.", "No.", "Probably.", "Probably not.", "Ask again later.", "Signs point to yes.", "Very doubtful.", "Without a doubt." ];
        return {
          text: `\ud83c\udfb1 ${e[Math.floor(Math.random() * e.length)]}`
        };
      }
      if ("rps" === e) {
        const e = t.toLowerCase();
        if (![ "rock", "paper", "scissors" ].includes(e)) throw new Error("Choose rock, paper, or scissors.");
        const n = [ "rock", "paper", "scissors" ][Math.floor(3 * Math.random())];
        return {
          text: `You chose ${e}; Nyx chose ${n}. ${e === n ? "Tie." : "rock" === e && "scissors" === n || "paper" === e && "rock" === n || "scissors" === e && "paper" === n ? "You win!" : "Nyx wins."}`
        };
      }
      if ("random" === e) {
        const e = t.match(/^(-?\d+)\s+(-?\d+)$/);
        if (!e) throw new Error("Use /random min max.");
        let n = Number(e[1]), a = Number(e[2]);
        if (n > a && ([n, a] = [ a, n ]), a - n > 1e9) throw new Error("Choose a smaller numeric range.");
        return {
          text: String(n + Math.floor(Math.random() * (a - n + 1)))
        };
      }
      if ("calc" === e) {
        const e = n("an expression");
        if (e.length > 80 || !/^[\d\s+\-*/%.()]+$/.test(e)) throw new Error("Use only numbers, parentheses, decimals, +, -, *, /, and %.");
        let t;
        try {
          t = Function(`"use strict";return (${e})`)();
        } catch {
          throw new Error("That calculation is not valid.");
        }
        if ("number" != typeof t || !Number.isFinite(t)) throw new Error("That calculation has no finite result.");
        return {
          text: `${e} = ${Number(t.toPrecision(12))}`
        };
      }
      if ("timer" === e) {
        const e = bt(n("a duration"));
        return Ct(e, `Your ${St(e)} timer is done.`), {
          handled: !0
        };
      }
      if ("remind" === e) {
        const e = t.match(/^(\S+)\s+([\s\S]+)$/);
        if (!e) throw new Error("Use /remind 10m your reminder.");
        return Ct(bt(e[1]), `Reminder: ${xt(e[2], "Reminder")}`), {
          handled: !0
        };
      }
      if ("date" === e) return {
        text: (new Date).toLocaleDateString([], {
          dateStyle: "full"
        })
      };
      if ("time" === e) return {
        text: (new Date).toLocaleTimeString([], {
          timeStyle: "medium"
        })
      };
      if ("timezone" === e) {
        const e = t || Intl.DateTimeFormat().resolvedOptions().timeZone;
        try {
          return {
            text: `${e}: ${(new Date).toLocaleString([], {
              dateStyle: "medium",
              timeStyle: "medium",
              timeZone: e
            })}`
          };
        } catch {
          throw new Error("Enter a valid IANA time zone, such as America/Los_Angeles.");
        }
      }
      if ("unix" === e) return {
        text: String(Math.floor(Date.now() / 1e3))
      };
      if ("serverinfo" === e) return Et(`Nyx Chat \xb7 ${y.members.length} members \xb7 ${y.channels.length} text channels \xb7 ${y.voiceChannels.length} voice channels \xb7 ${y.socketConnected ? "Socket.IO live" : "recovery mode"}.`);
      if ("membercount" === e) return Et(`${y.members.length} Chat members.`);
      if ("onlinecount" === e) return Et(`${y.members.filter(e => e.online).length} members online.`);
      if ("channels" === e) return Et(y.channels.length ? y.channels.map(e => `#${e.name}`).join(", ") : "No text channels are visible.");
      if ("voicechannels" === e) return Et(y.voiceChannels.length ? y.voiceChannels.map(e => e.name).join(", ") : "No voice channels are visible.");
      if ("dms" === e) return Et(`${y.conversations.length} private conversation${1 === y.conversations.length ? "" : "s"}.`);
      if ("status" === e) return Et(`${y.me?.displayName || "Nyx member"} \xb7 ${y.me?.handle || ""} \xb7 ${O(y.me?.role, y.me)} \xb7 ${y.socketConnected ? "Live" : "Recovery mode"}`);
      if ("topic" === e) {
        const e = S();
        if (!e) throw new Error("Use /topic inside a text channel.");
        return Et(e.description || `#${e.name} has no topic.`);
      }
      if ("afk" === e) return {
        text: `* ${y.me?.displayName || "Nyx member"} is now AFK${t ? `: ${t}` : "."}`
      };
      if ("brb" === e) return {
        text: "Be right back" + (t ? ` \u2014 ${t}` : "!")
      };
      if ("back" === e) return {
        text: `* ${y.me?.displayName || "Nyx member"} is back.`
      };
      if ("copyid" === e) {
        const e = gt(t) || y.me;
        if (!e?.uid) throw new Error("Choose a member with an account.");
        return Ye(e.uid, `${e.displayName}'s UID copied.`), {
          handled: !0
        };
      }
      if ("welcome" === e) {
        const e = gt(t);
        return {
          text: e ? `Welcome to Nyx Chat, ${e.handle}! \ud83c\udf89` : "Welcome to Nyx Chat! \ud83c\udf89"
        };
      }
      return null;
    }(n, a);
    if (o) return await o;
    if ("roles" === n) return E(y.customRoles.length ? y.customRoles.map(e => `${e.label} (${e.id}) \xb7 ${O(e.baseRole)} placement`).join(" | ") : "No custom roles have been created.", "success"), 
    {
      handled: !0
    };
    if ("roleadd" === n || "roleremove" === n) return await async function(e, t) {
      if ("owner" !== y.me?.role) throw new Error("Only the Nyx Owner can manage custom roles.");
      const n = gt(t);
      if (!n || n.self) throw new Error(`Choose another member, for example /${e} @person${"roleadd" === e ? " role" : ""}.`);
      if ("roleremove" === e) await F(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/custom-role-assignments/${encodeURIComponent(n.uid)}`, {
        method: "DELETE"
      }), E(`Custom role removed from ${n.displayName}.`, "success"); else {
        const e = t.split(/\s+/).slice(1).join(" ").trim().toLowerCase().replace(/^@/, ""), a = y.customRoles.find(t => t.id === e || String(t.label || "").toLowerCase() === e);
        if (!a) throw new Error("Choose a custom role by name or ID. Type /roles to see the list.");
        await F(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/custom-roles/${encodeURIComponent(a.id)}/assign`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            uid: n.uid
          })
        }), E(`${a.label} assigned to ${n.displayName}.`, "success");
      }
      await Zt();
    }(n, a), {
      handled: !0
    };
    if ("userinfo" === n) {
      const e = gt(a) || y.me;
      if (!e) throw new Error("Choose a member, for example /userinfo @person.");
      return E(`${e.displayName} \xb7 ${e.handle} \xb7 ${O(e.role, e)} \xb7 ${e.online ? "Online" : "Offline"}`, "success"), 
      {
        handled: !0
      };
    }
    if ("avatar" === n) {
      const e = gt(a) || y.me;
      if (!e) throw new Error("Choose a member, for example /avatar @person.");
      return ce(e), {
        handled: !0
      };
    }
    if ("channelinfo" === n) {
      const e = S();
      if (!e) throw new Error("Use this command inside a text channel.");
      return E(`#${e.name} \xb7 ${e.description || "No description"} \xb7 ${e.minimumRole && "member" !== e.minimumRole ? `${O(e.minimumRole)} and above` : "Everyone"}`, "success"), 
      {
        handled: !0
      };
    }
    if ("timestamp" === n) return {
      text: (new Date).toLocaleString()
    };
    if ("poll" === n) {
      const e = a.split("|").map(e => e.trim()).filter(Boolean);
      if (e.length < 3) throw new Error("Use /poll question | option | option.");
      return {
        text: `\ud83d\udcca ${e[0]}\n${e.slice(1, 11).map((e, t) => `${t + 1}. ${e}`).join("\n")}`
      };
    }
    return It(e);
  }, qt = Mt = async function(e) {
    const t = await Dt(e);
    if (t?.text && (t.text = rt(t.text), t.text.length > 1e3)) throw new Error("That command result is longer than the 1,000-character message limit. Shorten the input and try again.");
    return t;
  }, Pt = Mt = async function(e) {
    const t = String(e || "").match(/^\/([A-Za-z][A-Za-z0-9-]*)(?:\s+([\s\S]*))?$/), n = String(t?.[1] || "").toLowerCase(), a = h.some(e => e.name === n || (e.aliases || []).includes(n)) ? null : ct().find(e => e.name === n || (e.aliases || []).includes(n));
    if (!a) return qt(e);
    const o = String(t?.[2] || "").trim(), i = o.split(/\s+/).filter(Boolean), r = "channel" === y.active.type ? S()?.name || "channel" : C()?.other?.displayName || "Direct Message", s = {
      args: o,
      user: y.me?.displayName || "Nyx member",
      handle: y.me?.handle || "",
      channel: r
    }, c = String(a.response || "").replace(/\{(args|user|handle|channel|\d+)\}/gi, (e, t) => /^\d+$/.test(t) ? i[Math.max(0, Number(t) - 1)] || "" : s[t.toLowerCase()] ?? e).trim();
    if (!c) throw new Error("That custom command produced an empty response.");
    return {
      text: rt(c)
    };
  };
  function Rt() {
    y.mentionItems = [], y.mentionRange = null, y.mentionIndex = 0, y.mentionQueryKey = "", 
    v.mentionMenu.hidden = !0, v.mentionMenu.replaceChildren();
  }
  function jt() {
    const e = v.input.selectionStart ?? v.input.value.length, t = v.input.value.slice(0, e), n = t.match(new RegExp(`^${i(r)}([A-Za-z0-9-]*)$`)), a = t.match(/(^|[\s([{]):([a-z0-9_+-]{0,32})(:?)$/i);
    let o = [], s = "";
    if (n) {
      const t = String(n[1] || "").toLowerCase();
      s = `command:${t}`, o = dt().filter(e => st(e) && (!t || e.name.startsWith(t) || (e.aliases || []).some(e => e.startsWith(t)))).slice(0, 9).map(e => ({
        type: "command",
        value: `${r}${e.name}`,
        command: e
      })), y.mentionRange = {
        start: 0,
        end: e
      };
    } else if (a) {
      const t = String(a[2] || "").toLowerCase();
      s = `emoji:${t}`, o = Object.entries(d).filter(([e]) => !t || e.includes(t)).sort(([e], [n]) => {
        const a = e => e === t ? 0 : e.startsWith(t) ? 1 : 2;
        return a(e) - a(n) || e.localeCompare(n);
      }).slice(0, 10).map(([e, t]) => ({
        type: "emoji",
        value: t,
        name: e,
        emoji: t
      })), y.mentionRange = {
        start: e - a[2].length - a[3].length - 1,
        end: e
      };
    } else {
      const n = t.match(new RegExp(`^${i(r)}(?:ban|ipban|unban|tempban|untempban|mute|unmute|warn|demote)\\s+(@?[A-Za-z0-9_.-]*)$`)), a = t.match(/(^|\s)@([A-Za-z0-9_.-]*)$/) || (n ? [ n[1], "", n[1].replace(/^@/, "") ] : null);
      if (!a) return void Rt();
      const c = String(a[2] || "").toLowerCase();
      s = `mention:${c}`, function(e) {
        pt !== e && (pt = e, clearTimeout(ut), e && (ut = setTimeout(() => {
          ft(e).then(() => {
            pt === e && jt();
          }).catch(() => {});
        }, 180)));
      }(c), o = ht().filter(e => !c || String(e.handle || "").slice(1).toLowerCase().includes(c) || String(e.displayName || "").toLowerCase().includes(c)).slice(0, 7).map(e => ({
        type: "member",
        value: e.handle,
        member: e
      })), !n && B() && "everyone".includes(c) && o.unshift({
        type: "everyone",
        value: "@everyone"
      }), y.mentionRange = {
        start: e - a[0].length + (a[1]?.length || 0),
        end: e
      };
    }
    o.length ? (y.mentionQueryKey !== s && (y.mentionIndex = 0), y.mentionQueryKey = s, 
    y.mentionItems = o, y.mentionIndex = Math.min(y.mentionIndex, o.length - 1), v.mentionMenu.replaceChildren(), 
    o.forEach((e, t) => {
      const n = document.createElement("button");
      if (n.type = "button", n.className = `mention-option${"emoji" === e.type ? " emoji-option" : ""}${t === y.mentionIndex ? " active" : ""}`, 
      n.setAttribute("role", "option"), n.setAttribute("aria-selected", String(t === y.mentionIndex)), 
      "emoji" === e.type) {
        const t = document.createElement("span");
        t.className = "mention-emoji", t.textContent = e.emoji, n.append(t);
      } else if ("everyone" === e.type || "command" === e.type) {
        const t = document.createElement("span");
        t.className = "mention-everyone", t.textContent = "command" === e.type ? "/" : "@", 
        n.append(t);
      } else n.append(L(e.member, e.member.online));
      const a = document.createElement("span"), o = document.createElement("strong");
      "member" === e.type ? o.append(z(e.member)) : "emoji" === e.type ? o.textContent = `:${e.name}:` : o.textContent = "everyone" === e.type ? "Everyone" : e.command.usage;
      const i = document.createElement("small");
      i.textContent = "emoji" === e.type ? "Emoji" : "everyone" === e.type ? "Notify everyone in this channel" : "command" === e.type ? e.command.description : e.member.handle, 
      a.append(o, i), n.append(a), n.addEventListener("mousedown", e => {
        e.preventDefault(), Ut(t);
      }), v.mentionMenu.append(n);
    }), v.mentionMenu.hidden = !1) : Rt();
  }
  function Ut(e = y.mentionIndex) {
    const t = y.mentionItems[e], n = y.mentionRange;
    if (!t || !n) return;
    const a = v.input.value.slice(n.end), o = /^\s/.test(a) ? "" : " ", i = `${v.input.value.slice(0, n.start)}${t.value}${o}${a}`;
    v.input.value = i;
    const r = n.start + t.value.length + o.length;
    v.input.setSelectionRange(r, r), Rt(), Jt(), v.input.focus();
  }
  Mt = async function(t) {
    const n = String(t || "").match(/^\/([A-Za-z][A-Za-z0-9-]*)(?:\s+([\s\S]*))?$/);
    return "purge" !== String(n?.[1] || "").toLowerCase() ? Pt(t) : (await async function(t) {
      if ("channel" !== y.active.type) throw new Error("Use /purge inside a text channel.");
      if (!B()) throw new Error("Only moderators and staff can purge channel messages.");
      const n = String(t || "").trim();
      if (n && !/^\d+$/.test(n)) throw new Error("Use /purge followed by a number from 1 to 100.");
      const a = n ? Number(n) : 10;
      if (!Number.isInteger(a) || a < 1 || a > 100) throw new Error("Choose between 1 and 100 messages.");
      const o = S();
      if (!confirm(`Delete the newest ${a} message${1 === a ? "" : "s"} from #${o?.name || y.active.id}? This cannot be undone.`)) return;
      const i = await F(`${e}/messages/purge`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          channel: y.active.id,
          count: a
        })
      }), r = new Set((Array.isArray(i.deletedIds) ? i.deletedIds : []).map(String)), s = b();
      (y.messages.get(s) || []).filter(e => r.has(e.id)).flatMap(e => e.attachments || []).forEach(e => {
        const t = y.blobUrls.get(e.id);
        t && String(t).startsWith("blob:") && URL.revokeObjectURL(t), y.blobUrls.delete(e.id), 
        y.blobExpires.delete(e.id);
      }), y.messages.set(s, (y.messages.get(s) || []).filter(e => !r.has(e.id))), Ge(), 
      ie();
      const c = Math.max(0, Number(i.deletedCount || r.size));
      E(c ? `${c} message${1 === c ? "" : "s"} deleted.` : "There were no messages to delete.", "success");
    }(String(n?.[2] || "").trim()), {
      handled: !0
    });
  };
  let Ot, _t = 0;
  function zt() {
    return [ "owner", "co_owner", "admin", "manager", "developer", "moderator" ].includes(y.me?.role);
  }
  function Bt() {
    return !0 === S()?.locked && !zt();
  }
  function Vt() {
    const e = window.visualViewport;
    document.documentElement.style.setProperty("--chat-viewport-height", `${e && 1 === e.scale ? e.height : innerHeight}px`), 
    v.form.hidden || Jt();
  }
  function Jt() {
    const e = "dm" === y.active.type && !N.canMessage(y.conversations.find(e => e.id === y.active.id)?.other?.uid), t = Bt() || e, n = !zt() && Date.now() < _t, a = v.input.value.length;
    v.count.textContent = n ? `Wait ${Math.ceil((_t - Date.now()) / 1e3)}s before sending` : `${a} / 1000`, 
    v.input.style.height = "auto", v.input.style.height = `${Math.min(130, v.input.scrollHeight)}px`, 
    v.input.readOnly = t, v.attachmentButton.disabled = y.busy || t || n, v.send.disabled = y.busy || t || n && !v.input.value.trim().startsWith(r) || !v.input.value.trim() && !y.files.length, 
    v.input.placeholder = t ? e ? "Direct messages are unavailable." : "Channel locked ? only moderators and higher roles can send" : "dm" === y.active.type ? "Message?" : `Message #${y.active.id}`;
  }
  function Gt() {
    v.channelEditId.value = "", v.channelName.value = "", v.channelDescriptionInput.value = "", 
    document.querySelector("[data-channel-minimum-role]").value = "member", document.querySelector("[data-channel-group-select]").value = "", 
    v.channelEditCancel.hidden = !0, v.channelSave.textContent = "Add channel";
  }
  function Ft() {
    v.channelManagerList && (document.querySelector("[data-channel-group-field]").hidden = "voice" === y.channelManagerKind, 
    v.channelManagerList.replaceChildren(), document.querySelectorAll("[data-channel-kind]").forEach(e => e.classList.toggle("active", e.dataset.channelKind === y.channelManagerKind)), 
    ("voice" === y.channelManagerKind ? y.voiceChannels : y.channels).forEach(t => {
      const n = document.createElement("div");
      n.className = "channel-manager-item";
      const a = document.createElement("span"), o = document.createElement("strong");
      o.textContent = t.name;
      const i = document.createElement("small");
      i.textContent = `${t.description || "No description"} \xb7 ${t.minimumRole && "member" !== t.minimumRole ? `${O(t.minimumRole)} and above` : "Everyone"}`, 
      a.append(o, i);
      const r = V("edit", "", "Edit channel");
      r.disabled = y.channelManagerBusy, r.addEventListener("click", () => {
        v.channelEditId.value = t.id, v.channelName.value = t.name, v.channelDescriptionInput.value = t.description || "", 
        document.querySelector("[data-channel-minimum-role]").value = t.minimumRole || "member", 
        document.querySelector("[data-channel-group-select]").value = oe(t), v.channelEditCancel.hidden = !1, 
        v.channelSave.textContent = "Save changes", v.channelName.focus();
      });
      const s = V("trash", "delete", "Delete channel");
      s.disabled = y.channelManagerBusy, s.addEventListener("click", () => {
        !async function(t) {
          if (!y.channelManagerBusy && confirm(`Delete ${t.name}?`)) {
            y.channelManagerBusy = !0;
            try {
              Yt(await F(`${e}/channels`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  action: "delete",
                  kind: y.channelManagerKind,
                  id: t.id
                })
              })), Gt(), E("Channel deleted.", "success");
            } catch (n) {
              E(n.message);
            } finally {
              y.channelManagerBusy = !1, Ft();
            }
          }
        }(t);
      }), n.append(a, r, s), v.channelManagerList.append(n);
    }));
  }
  function Yt(e) {
    y.channels = Array.isArray(e.textChannels) ? e.textChannels.map(e => ({
      ...y.channels.find(t => t.id === e.id),
      ...e
    })) : y.channels, y.voiceChannels = Array.isArray(e.voiceChannels) ? e.voiceChannels : y.voiceChannels, 
    "channel" !== y.active.type || y.channels.some(e => e.id === y.active.id) || (y.active = {
      type: "channel",
      id: y.channels[0]?.id || "general"
    }, y.loaded.delete(b()), et({
      initial: !0
    }).catch(e => E(e.message))), y.voiceSessionId && !y.voiceChannels.some(e => e.id === y.voiceChannelId) && Re({
      notifyServer: !1
    }), _e(), ie(), we(), Ft();
  }
  function Ht() {
    const t = y.caffeine || {};
    if (v.caffeineButton?.classList.toggle("active", !0 === t.active), !v.caffeineStatus || !v.caffeineGiftList) return;
    if (v.caffeineGiftList.replaceChildren(), !t.active) {
      v.caffeineStatus.textContent = "Caffeine is Nyx Premium. Only the Nyx owner can grant it.";
      const e = document.createElement("p");
      return e.className = "caffeine-empty", e.textContent = "You do not have Caffeine yet.", 
      void v.caffeineGiftList.append(e);
    }
    if (t.canGift ? t.unlimited ? v.caffeineStatus.textContent = "Your role includes unlimited Caffeine. You can keep sharing cups without using them up." : t.giftDerived ? v.caffeineStatus.textContent = "Your Caffeine was shared with you. Gifted Caffeine includes Premium access but cannot be gifted again." : "accepted" === t.outgoingGift?.status ? v.caffeineStatus.textContent = `You shared your cup with ${t.outgoingGift.recipientDisplayName}.` : "pending" === t.outgoingGift?.status ? v.caffeineStatus.textContent = `Your cup is waiting for ${t.outgoingGift.recipientDisplayName} to accept it.` : v.caffeineStatus.textContent = "You have Caffeine and can share one cup from this Premium subscription." : v.caffeineStatus.textContent = "You have Caffeine. Only the Nyx owner can grant Caffeine to other members.", 
    !t.canGift) {
      const e = document.createElement("p");
      return e.className = "caffeine-empty", e.textContent = "Caffeine grants are managed by the owner.", 
      void v.caffeineGiftList.append(e);
    }
    const n = y.members.filter(e => !e.self && !e.caffeine);
    if (!n.length) {
      const e = document.createElement("p");
      return e.className = "caffeine-empty", e.textContent = "Every visible member already has Caffeine.", 
      void v.caffeineGiftList.append(e);
    }
    n.forEach(t => {
      const n = document.createElement("button");
      n.type = "button", n.className = "caffeine-gift-member", n.append(L(t, t.online));
      const a = document.createElement("span"), o = document.createElement("strong");
      o.append(z(t));
      const i = document.createElement("small");
      i.textContent = `${t.handle} \xb7 ${t.roleLabel || O(t.role)}`, a.append(o, i);
      const r = document.createElement("em");
      r.textContent = "Share cup", n.append(a, r), n.addEventListener("click", () => {
        !async function(t, n) {
          if (y.caffeine?.canGift && confirm(`Share your Caffeine gift with ${t.displayName}?`)) {
            n.disabled = !0;
            try {
              const n = await F(`${e}/caffeine/gifts`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  recipientUid: t.uid
                })
              });
              y.caffeine = n.caffeine || y.caffeine, Ht(), E(`Caffeine gift sent to ${t.displayName}.`, "success");
            } catch (a) {
              E(a.message);
            } finally {
              n.disabled = !1;
            }
          }
        }(t, n);
      }), v.caffeineGiftList.append(n);
    });
  }
  function Wt() {
    const e = y.caffeine?.pendingGift;
    e && e.id !== y.shownCaffeineGift && !v.caffeineGiftDialog?.open && (y.shownCaffeineGift = e.id, 
    v.caffeineGiftMessage.textContent = `${e.giverDisplayName} wants to share a cup of coffee with you. Do you accept?`, 
    v.caffeineGiftDialog.showModal());
  }
  async function Kt() {
    try {
      const t = await F(`${e}/caffeine`, {
        cache: "no-store"
      });
      y.caffeine = t.caffeine || null, Ht(), Wt();
    } catch {}
  }
  async function Zt({initial: t = !1} = {}) {
    const n = await F(`${e}/bootstrap`, {
      cache: "no-store"
    });
    y.me = n.me || null, y.members = Array.isArray(n.members) ? n.members : [], y.channels = Array.isArray(n.channels) ? n.channels : [], 
    y.caffeine = n.caffeine || y.caffeine, y.revision = Math.max(y.revision, Number(n.revision || 0)), 
    ee(Array.isArray(n.conversations) ? n.conversations : [], {
      notify: !t
    }), y.latestActivity = n.latestActivity || {}, n.voice && (Array.isArray(n.voice.channels) && (y.voiceChannels = n.voice.channels), 
    Array.isArray(n.voice.participants) && (y.voiceParticipants = n.voice.participants)), 
    document.querySelector("[data-deleted-messages]").hidden = "owner" !== y.me?.role, 
    v.manageChannels.hidden = !y.me?.canManageChannels, v.flaggedSearches.hidden = !B(), 
    "channel" !== y.active.type || y.channels.some(e => e.id === y.active.id) || (y.active = {
      type: "channel",
      id: y.channels[0]?.id || "general"
    }), "dm" !== y.active.type || y.conversations.some(e => e.id === y.active.id) || (y.active = {
      type: "channel",
      id: y.channels[0]?.id || "general"
    }), _e(), ie(), re(), de(), se(), we(), Ht(), Wt(), t || Ge(), v.commandDialog?.open && $t(), 
    t && (await N.refresh(), await et({
      initial: !0
    }));
  }
  window.addEventListener("resize", Vt), window.visualViewport?.addEventListener("resize", Vt), 
  Vt();
  let Qt = null;
  function Xt(t = {}) {
    return Qt || (Qt = async function({force: t = !1} = {}) {
      if (y.socketConnected && !t && Date.now() - y.lastFallbackAt < 1e4) return;
      y.lastFallbackAt = Date.now();
      const n = await F(`${e}/updates?since=${encodeURIComponent(y.revision)}`, {
        cache: "no-store",
        signal: AbortSignal.timeout(1e4)
      });
      if (y.revision = Math.max(y.revision, Number(n.revision || 0)), n.reset) return await Zt(), 
      void (y.loaded.has(b()) && await et({
        poll: !0,
        replace: !0
      }));
      const a = Array.isArray(n.events) ? n.events : [];
      if (!a.length) return void (y.socketConnected && y.loaded.has(b()) && await et({
        poll: !0,
        replace: !0
      }));
      let o = !1, i = !1, r = !1, s = y.socketConnected && y.loaded.has(b());
      if (a.forEach(e => {
        if ("message" !== e.kind || "conversation" !== e.scopeType || e.lastMessageAuthorUid === y.me?.uid || !0 !== e.mentionsViewer && !X(e.lastMessageText) || Q(`dm:${e.scopeId}:${e.createdAtMs}`, "mention", {
          uid: e.lastMessageAuthorUid,
          sender: y.members.find(t => t.uid === e.lastMessageAuthorUid)?.displayName || "Someone",
          preview: e.lastMessageText || ""
        }), "configuration" !== e.kind && "members" !== e.kind || (o = !0), "caffeine" === e.kind && (r = !0), 
        "conversation" === e.scopeType && (i = !0), e.scopeType === y.active.type.replace("dm", "conversation") && e.scopeId === y.active.id && (s = !0), 
        "message" === e.kind && "channel" === e.scopeType) {
          const t = Number(e.createdAtMs || 0), n = Number(y.latestActivity[e.scopeId] || 0);
          (t > n || !0 === e.mentionsViewer || X(e.lastMessageText)) && e.lastMessageAuthorUid && e.lastMessageAuthorUid !== y.me?.uid && Q(`message:${e.scopeId}:${t}`, !0 === e.mentionsViewer || X(e.message?.text || e.lastMessageText) ? "mention" : "chat", {
            uid: e.lastMessageAuthorUid,
            sender: y.members.find(t => t.uid === e.lastMessageAuthorUid)?.displayName || "Someone",
            preview: e.lastMessageText || ""
          }), y.latestActivity[e.scopeId] = Math.max(n, t);
        }
      }), o) return await Zt(), void (y.loaded.has(b()) && await et({
        poll: !0,
        replace: !0
      }));
      const c = [];
      i && c.push(te()), r && c.push(Kt()), s && c.push(et({
        poll: !0,
        replace: !0
      })), await Promise.all(c), ie();
    }(t).finally(() => {
      Qt = null;
    }), Qt);
  }
  const en = document.querySelector("[data-deleted-dialog]"), tn = document.querySelector("[data-deleted-list]"), nn = document.querySelector("[data-deleted-older]");
  let an = "", on = null, rn = !1, sn = 0;
  async function cn() {
    if (rn) return;
    rn = !0, nn.disabled = !0;
    const t = sn;
    try {
      const n = an, a = await F(`${e}/deleted-messages?scope=${encodeURIComponent(n)}${on ? "&before=" + encodeURIComponent(on) : ""}`, {
        cache: "no-store"
      });
      if (t !== sn || n !== an || !en.open) return;
      for (const e of a.messages || []) {
        const t = document.createElement("article"), n = document.createElement("strong"), a = document.createElement("p"), o = document.createElement("small");
        if (n.textContent = e.author?.displayName || e.author?.handle || "Nyx member", a.textContent = e.text || "(Attachment-only message)", 
        o.textContent = `Sent ${I(e.createdAtMs)}; deleted ${new Date(e.deletedAtMs).toLocaleString()} by ${e.deletedBy}`, 
        t.append(n, a, o), e.attachmentNames?.length) {
          const n = document.createElement("p");
          n.textContent = "Deleted attachments: " + e.attachmentNames.join(", "), t.append(n);
        }
        tn.append(t);
      }
      on = a.nextCursor, nn.hidden = !on, tn.childElementCount || (tn.textContent = "No retained deleted messages in this conversation.");
    } catch (n) {
      t === sn && E(n.message);
    } finally {
      t === sn && (rn = !1, nn.disabled = !1);
    }
  }
  function dn() {
    y.me = null, N.reset(), clearInterval(y.pollTimer), clearInterval(y.dmPollTimer), 
    clearInterval(y.bootstrapTimer), clearInterval(y.caffeineTimer), W(), Re({
      notifyServer: !1,
      resumePolling: !1
    }), v.loading.hidden = !0, v.scroller.hidden = !0, v.form.hidden = !0, v.gate.hidden = !1, 
    v.currentUser.hidden = !0, x("Sign in", "error");
  }
  async function ln() {
    v.loading.hidden = !1, v.gate.hidden = !0, v.scroller.hidden = !0, v.form.hidden = !0, 
    x("Connecting");
    try {
      if (await G(), !y.token) return void dn();
      await Zt({
        initial: !0
      });
      const e = new URLSearchParams(location.search).get("conversation");
      e && y.conversations.some(t => t.id === e) && (T("dms"), await tt({
        type: "dm",
        id: e
      })), v.loading.hidden = !0, v.scroller.hidden = !1, v.form.hidden = !1, v.gate.hidden = !0, 
      Jt(), x("Live", "connected"), H(), De(5e3), clearInterval(y.pollTimer), y.pollTimer = setInterval(() => {
        document.hidden || Xt().catch(e => {
          x("Retrying", "error"), 401 === e.status && dn();
        });
      }, 3e3), clearInterval(y.dmPollTimer), clearInterval(y.bootstrapTimer), y.bootstrapTimer = setInterval(() => {
        document.hidden || y.busy || Zt().catch(() => {});
      }, 6e5), clearInterval(y.caffeineTimer);
    } catch (e) {
      401 === e.status ? dn() : (v.loading.hidden = !0, v.gate.hidden = !1, v.gate.querySelector("h2").textContent = "Nyx Chat could not open", 
      v.gate.querySelector("p").textContent = e.message || "Try again shortly.", x("Unavailable", "error"));
    }
  }
  document.querySelector("[data-deleted-messages]").addEventListener("click", () => {
    an = y.active.id, on = null, tn.replaceChildren(), nn.hidden = !0, en.showModal(), 
    cn();
  }), document.querySelector("[data-deleted-close]").addEventListener("click", () => en.close()), 
  en.addEventListener("close", () => {
    sn++, rn = !1, tn.replaceChildren(), an = "", on = null;
  }), nn.addEventListener("click", () => {
    cn();
  }), document.querySelectorAll("[data-back-to-nyx]").forEach(e => e.addEventListener("click", e => {
    e.preventDefault(), window.parent !== window ? window.parent.postMessage({
      type: "nyx:go-home"
    }, location.origin) : location.href = "/";
  })), v.guidelinesDismiss?.addEventListener("click", function() {
    v.guidelines.hidden = !0;
    try {
      localStorage.setItem(a, "1");
    } catch {}
  }), function() {
    try {
      v.guidelines.hidden = "1" === localStorage.getItem(a);
    } catch {
      v.guidelines.hidden = !1;
    }
  }(), document.querySelector("[data-channels-toggle]")?.addEventListener("click", () => $("channels")), 
  document.querySelector("[data-members-toggle]")?.addEventListener("click", () => $("members")), 
  document.querySelector("[data-sidebar-close]")?.addEventListener("click", k), document.querySelector("[data-members-close]")?.addEventListener("click", k), 
  v.shade.addEventListener("click", k), document.querySelector("[data-new-dm]")?.addEventListener("click", function() {
    v.dmSearch.value = "", Oe(""), v.dmDialog.showModal(), setTimeout(() => v.dmSearch.focus(), 0);
  }), document.querySelector("[data-dm-dialog-close]")?.addEventListener("click", () => v.dmDialog.close()), 
  v.dmSearch.addEventListener("input", () => Oe(v.dmSearch.value)), v.dmDialog.addEventListener("click", e => {
    e.target === v.dmDialog && v.dmDialog.close();
  }), v.manageChannels?.addEventListener("click", function() {
    y.me?.canManageChannels && (y.channelManagerKind = "text", Gt(), Ft(), v.channelManagerDialog.showModal());
  }), document.querySelector("[data-channel-manager-close]")?.addEventListener("click", () => v.channelManagerDialog.close()), 
  v.channelManagerDialog?.addEventListener("click", e => {
    e.target === v.channelManagerDialog && v.channelManagerDialog.close();
  }), document.querySelectorAll("[data-channel-kind]").forEach(e => e.addEventListener("click", () => {
    y.channelManagerKind = "voice" === e.dataset.channelKind ? "voice" : "text", Gt(), 
    Ft();
  })), v.channelManagerForm?.addEventListener("submit", async function(t) {
    if (t.preventDefault(), y.channelManagerBusy) return;
    const n = v.channelEditId.value.trim();
    y.channelManagerBusy = !0, v.channelSave.disabled = !0;
    try {
      Yt(await F(`${e}/channels`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          action: n ? "update" : "create",
          kind: y.channelManagerKind,
          id: n,
          name: v.channelName.value,
          description: v.channelDescriptionInput.value,
          minimumRole: document.querySelector("[data-channel-minimum-role]").value,
          ..."text" === y.channelManagerKind ? {
            group: document.querySelector("[data-channel-group-select]").value
          } : {}
        })
      })), Gt(), E(n ? "Channel updated." : "Channel created.", "success");
    } catch (a) {
      E(a.message);
    } finally {
      y.channelManagerBusy = !1, v.channelSave.disabled = !1, Ft();
    }
  }), v.channelEditCancel?.addEventListener("click", Gt), v.caffeineButton?.addEventListener("click", function() {
    Ht(), v.caffeineDialog?.showModal();
  }), document.querySelector("[data-caffeine-close]")?.addEventListener("click", () => v.caffeineDialog.close()), 
  v.caffeineDialog?.addEventListener("click", e => {
    e.target === v.caffeineDialog && v.caffeineDialog.close();
  }), document.querySelector("[data-caffeine-gift-later]")?.addEventListener("click", () => v.caffeineGiftDialog.close()), 
  v.caffeineAccept?.addEventListener("click", () => {
    !async function() {
      const t = y.caffeine?.pendingGift;
      if (t) {
        v.caffeineAccept.disabled = !0;
        try {
          const n = await F(`${e}/caffeine/gifts/${encodeURIComponent(t.id)}/accept`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: "{}"
          });
          y.caffeine = n.caffeine || {
            active: !0,
            giftDerived: !0,
            canGift: !1,
            pendingGift: null
          }, y.me && (y.me.caffeine = !0);
          const a = y.members.find(e => e.uid === y.me?.uid);
          a && (a.caffeine = !0), v.caffeineGiftDialog.close(), Ht(), de(), se(), window.parent !== window && window.parent.postMessage({
            type: "nyx:subscription-refresh"
          }, location.origin), E("Caffeine accepted. Premium is now active.", "success");
        } catch (n) {
          E(n.message);
        } finally {
          v.caffeineAccept.disabled = !1;
        }
      }
    }();
  }), document.querySelector("[data-command-close]")?.addEventListener("click", () => v.commandDialog.close()), 
  v.commandDialog?.addEventListener("click", e => {
    e.target === v.commandDialog && v.commandDialog.close();
  }), v.commandPrefix?.addEventListener("change", () => {
    const e = r;
    !function(e) {
      const t = o(e);
      return t !== String(e || "").trim() ? (E("Use one or two symbols, not letters, spaces, @, or :."), 
      !1) : (r = t, localStorage.setItem(n, r), v.commandPrefix && (v.commandPrefix.value = r), 
      !0);
    }(v.commandPrefix.value) ? v.commandPrefix.value = e : (v.input.value.startsWith(e) && (v.input.value = `${r}${v.input.value.slice(e.length)}`), 
    $t(), Jt(), jt());
  }), v.customCommandForm?.addEventListener("submit", async function(t) {
    if (t.preventDefault(), "owner" !== y.me?.role) return;
    const n = String(v.customCommandName.value || "").trim().toLowerCase(), a = [ ...new Set(String(v.customCommandAliases.value || "").split(",").map(e => e.trim().toLowerCase()).filter(Boolean)) ], o = new Set(h.flatMap(e => [ e.name, ...e.aliases || [] ]));
    if (o.has(n) || a.some(e => o.has(e))) E("That name or alias is already a built-in Nyx command."); else {
      v.customCommandSave.disabled = !0;
      try {
        const t = await F(`${e}/custom-commands`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            action: "save",
            previousName: v.customCommandPrevious.value || n,
            name: n,
            aliases: a,
            description: v.customCommandDescription.value,
            response: v.customCommandResponse.value
          })
        });
        y.customCommands = Array.isArray(t.customCommands) ? t.customCommands : y.customCommands, 
        kt(), $t(), jt(), E(`${r}${n} saved for everyone.`, "success");
      } catch (i) {
        E(i.message);
      } finally {
        v.customCommandSave.disabled = !1;
      }
    }
  }), v.customCommandCancel?.addEventListener("click", kt), v.customCommandName?.addEventListener("input", () => {
    v.customCommandName.value = v.customCommandName.value.toLowerCase().replace(/[^a-z0-9-]/g, "");
  }), document.querySelector("[data-image-lightbox-close]")?.addEventListener("click", Be), 
  document.querySelector("[data-image-lightbox]")?.addEventListener("click", e => {
    e.target === e.currentTarget && Be();
  }), v.flaggedSearches?.addEventListener("click", () => {
    !async function() {
      if (!B()) return;
      v.flaggedSearchList.replaceChildren();
      const t = document.createElement("p");
      t.className = "flagged-search-empty", t.textContent = "Loading search history\u2026", 
      v.flaggedSearchList.append(t), v.flaggedSearchDialog.showModal();
      try {
        const t = await F(`${e}/moderation/search-history`, {
          cache: "no-store"
        });
        !function(e) {
          if (v.flaggedSearchList.replaceChildren(), !e.length) {
            const e = document.createElement("p");
            return e.className = "flagged-search-empty", e.textContent = "No search history has been retained.", 
            void v.flaggedSearchList.append(e);
          }
          e.forEach(e => {
            const t = document.createElement("article");
            t.className = "flagged-search-item" + (e.flagged ? " policy" : "");
            const n = document.createElement("div"), a = document.createElement("span");
            a.className = "flagged-search-category", a.textContent = e.category || "Standard search";
            const o = document.createElement("time");
            o.dateTime = e.createdAt || "", o.textContent = I(e.createdAtMs || e.createdAt), 
            n.append(a, o);
            const i = document.createElement("p");
            i.textContent = e.query;
            const r = y.members.find(t => t.uid === e.uid), s = document.createElement(r ? "button" : "span");
            s.className = "flagged-search-author", s.textContent = `${e.displayName || r?.displayName || "Nyx member"} \xb7 ${e.handle || r?.handle || "@member"} \xb7 ${O(e.role)}`, 
            r && (s.type = "button", s.addEventListener("click", () => {
              v.flaggedSearchDialog.close(), ce(r);
            })), t.append(n, i, s), v.flaggedSearchList.append(t);
          });
        }(Array.isArray(t.searches) ? t.searches : []);
      } catch (n) {
        t.textContent = n.message || "Search history is unavailable.";
      }
    }();
  }), document.querySelector("[data-flagged-search-close]")?.addEventListener("click", () => v.flaggedSearchDialog.close()), 
  v.flaggedSearchDialog?.addEventListener("click", e => {
    e.target === v.flaggedSearchDialog && v.flaggedSearchDialog.close();
  }), document.querySelector("[data-retry-auth]")?.addEventListener("click", () => {
    ln();
  }), v.loadOlder.addEventListener("click", () => {
    et({
      older: !0
    }).catch(e => E(e.message));
  }), v.form.addEventListener("submit", async function(t) {
    if (t.preventDefault(), y.busy) return;
    if (Bt()) return void E("This channel is locked. Only moderators and higher roles can send.");
    if (C() && !N.canMessage(C().other?.uid)) return void E("Direct messages are unavailable between these accounts.");
    if (!zt() && y.queuedSends >= 3) return void E("Wait for your pending messages to finish sending.");
    if (!zt() && Date.now() < _t && !v.input.value.trim().startsWith(r)) return void E("Please wait for the chat cooldown to finish.");
    let n = rt(v.input.value).trim();
    if (n || y.files.length) {
      if (!y.files.length && !n.startsWith(r)) {
        const t = {
          ...y.active
        }, a = y.replyingTo;
        return v.input.value = "", y.replyingTo = null, Je(), Rt(), Jt(), function(t, n, a = null) {
          const o = (crypto.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`).replace(/[^A-Za-z0-9_-]/g, ""), i = b(n), r = `pending-${o}`, s = Date.now(), c = a ? {
            id: a.id,
            text: String(a.text || "").slice(0, 240),
            attachmentName: String(a.attachments?.[0]?.name || ""),
            author: {
              uid: a.author?.uid || "",
              displayName: a.author?.displayName || "Nyx member",
              handle: a.author?.handle || ""
            }
          } : null, d = {
            id: r,
            text: t,
            attachments: [],
            reactions: [],
            replyTo: c,
            createdAt: new Date(s).toISOString(),
            createdAtMs: s,
            pending: !0,
            author: {
              uid: y.me?.uid || "",
              displayName: y.me?.displayName || "You",
              handle: y.me?.handle || "",
              avatarUrl: y.me?.avatarUrl || "",
              avatarDecoration: y.me?.avatarDecoration || "none",
              profileEffect: y.me?.profileEffect || "none",
              role: y.me?.role || "member",
              customRole: y.me?.customRole || null,
              caffeine: !0 === y.me?.caffeine
            }
          };
          ze(i, [ d ]), i === b() && (Ge(), requestAnimationFrame(() => {
            v.scroller.scrollTop = v.scroller.scrollHeight;
          })), y.queuedSends += 1;
          const l = async () => {
            try {
              if (!zt() && Date.now() < _t) throw new Error("Chat is cooling down. Your queued message was not sent.");
              const s = {
                text: t,
                requestId: o
              };
              a?.id && (s.replyToMessageId = a.id), "channel" === n.type ? s.channel = n.id : s.conversationId = n.id;
              const c = await F(`${e}/messages`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(s)
              });
              Tt(n, i, c.message, r);
            } catch (s) {
              Nt(i, r), i === b() && (Ge(), v.input.value.trim() || (v.input.value = t, Jt()), 
              !y.replyingTo && a && (y.replyingTo = a, Je())), E(s.message);
            } finally {
              y.queuedSends = Math.max(0, y.queuedSends - 1);
            }
          };
          y.sendQueue = y.sendQueue.then(l, l);
        }(n, t, a), void v.input.focus();
      }
      y.busy = !0, Jt(), v.attachmentButton.disabled = !0;
      try {
        if (n.startsWith(r)) {
          const e = `/${n.slice(r.length)}`, t = await Mt(e);
          if (t?.handled) return v.input.value = String(t.input || ""), Rt(), void Jt();
          n = rt(String(t?.text || "")).trim();
        }
        const t = [];
        for (let e = 0; e < y.files.length; e++) t.push(await it(y.files[e], e));
        const a = (crypto.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`).replace(/[^A-Za-z0-9_-]/g, ""), o = {
          ...y.active
        }, i = y.replyingTo, s = {
          text: n,
          requestId: a,
          attachmentIds: t
        };
        i?.id && (s.replyToMessageId = i.id), "channel" === o.type ? s.channel = o.id : s.conversationId = o.id;
        const c = await F(`${e}/messages`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(s)
        });
        v.input.value = "", y.files = [], y.replyingTo = null, ot(), Je(), Jt(), Tt(o, b(o), c.message);
      } catch (a) {
        E(a.message);
      } finally {
        y.busy = !1, v.attachmentButton.disabled = !1, Jt(), v.input.focus();
      }
    }
  }), v.voiceMute.addEventListener("click", je), v.voiceDeafen.addEventListener("click", Ue), 
  v.voiceScreen.addEventListener("click", () => {
    !async function() {
      if ("relay" !== y.voiceTransport) if (y.voiceScreenStream) await Pe(); else if (y.voiceChannelId) if (navigator.mediaDevices?.getDisplayMedia) {
        if (!y.voiceScreenBusy) {
          y.voiceScreenBusy = !0, ye();
          try {
            const e = await navigator.mediaDevices.getDisplayMedia({
              video: {
                frameRate: {
                  ideal: 24,
                  max: 30
                },
                width: {
                  ideal: 1280
                },
                height: {
                  ideal: 720
                }
              },
              audio: !1
            }), t = e.getVideoTracks()[0];
            if (!t) throw new Error("No screen was selected.");
            t.contentHint = "detail", y.voiceScreenStream = e, t.addEventListener("ended", () => {
              y.voiceScreenStream === e && Pe();
            }, {
              once: !0
            }), await Promise.all([ ...y.voicePeers.entries() ].map(async ([n, a]) => {
              a.screenSender ? await a.screenSender.replaceTrack(t) : a.screenSender = a.connection.addTrack(t, e), 
              await Ae(a.screenSender), await Me(n);
            })), E("Your screen is now shared with this voice channel.", "success");
          } catch (e) {
            "NotAllowedError" !== e.name && E(e.message || "Screen sharing could not start.");
          } finally {
            y.voiceScreenBusy = !1, ye();
          }
        }
      } else E("Screen sharing is not supported by this browser."); else E("Join a voice channel before sharing your screen."); else E("Screen sharing requires a WebRTC connection.");
    }();
  }), v.voiceDisconnect.addEventListener("click", () => {
    Re();
  }), v.voiceDeafen.addEventListener("click", ve), v.input.addEventListener("input", () => {
    Jt(), jt();
  }), v.input.addEventListener("click", jt), v.input.addEventListener("keydown", e => {
    if (!v.mentionMenu.hidden && [ "ArrowDown", "ArrowUp", "Enter", "Escape", "Tab" ].includes(e.key)) return e.preventDefault(), 
    "ArrowDown" === e.key ? y.mentionIndex = (y.mentionIndex + 1) % y.mentionItems.length : "ArrowUp" === e.key ? y.mentionIndex = (y.mentionIndex - 1 + y.mentionItems.length) % y.mentionItems.length : "Escape" === e.key ? Rt() : Ut(), 
    void (v.mentionMenu.hidden || jt());
    "Enter" !== e.key || e.shiftKey || e.isComposing || (e.preventDefault(), v.form.requestSubmit());
  }), v.attachmentButton.addEventListener("click", () => v.attachmentInput.click()), 
  v.attachmentInput.addEventListener("change", () => at(v.attachmentInput.files || [])), 
  v.input.addEventListener("paste", e => {
    const t = [ ...e.clipboardData?.items || [] ].filter(e => "file" === e.kind).map(e => e.getAsFile()).filter(Boolean);
    t.length && (e.preventDefault(), at(t));
  }), v.currentUser.setAttribute("role", "button"), v.currentUser.tabIndex = 0, v.currentUser.setAttribute("aria-label", "View your profile"), 
  v.currentUser.addEventListener("click", () => y.me && ce(y.me)), v.currentUser.addEventListener("keydown", e => {
    "Enter" !== e.key && " " !== e.key || (e.preventDefault(), y.me && ce(y.me));
  }), v.memberDialog.querySelector("[data-member-dialog-close]")?.addEventListener("click", () => v.memberDialog.close()), 
  v.memberDialog.addEventListener("click", e => {
    e.target === v.memberDialog && v.memberDialog.close();
  }), document.addEventListener("pointerdown", Z, {
    once: !0
  }), document.addEventListener("keydown", Z, {
    once: !0
  }), document.addEventListener("pointerdown", e => {
    v.messageContextMenu.hidden || v.messageContextMenu.contains(e.target) || Fe();
  }), document.addEventListener("keydown", e => {
    "Escape" === e.key && Fe();
  }), v.scroller.addEventListener("scroll", Fe, {
    passive: !0
  }), window.addEventListener("resize", Fe), document.addEventListener("visibilitychange", () => {
    !document.hidden && y.me && (y.socketConnected ? Xt({
      force: !0
    }).catch(() => {}) : (et({
      poll: !0
    }).catch(() => {}), te().catch(() => {}), Zt().catch(() => {})), Kt(), Ie());
  }), window.addEventListener("beforeunload", () => {
    clearInterval(y.pollTimer), clearInterval(y.dmPollTimer), clearInterval(y.bootstrapTimer), 
    clearInterval(y.caffeineTimer), W(), pe(), clearTimeout(y.voicePollTimer), y.voiceSessionId && y.token && fetch(`${e}/voice/leave`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${y.token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        sessionId: y.voiceSessionId
      }),
      keepalive: !0
    }), Ce(), y.voiceScreenStream?.getTracks().forEach(e => e.stop()), y.voiceStream?.getTracks().forEach(e => e.stop()), 
    y.blobUrls.forEach(e => {
      String(e).startsWith("blob:") && URL.revokeObjectURL(e);
    });
  }), window.addEventListener("beforeunload", () => {
    clearInterval(w), clearInterval(j);
  }), window.addEventListener("message", e => {
    e.source === window.parent && e.origin === location.origin && "nyx:profile-updated" === e.data?.type && y.me && Zt().catch(() => {});
  }), ln();
})();
