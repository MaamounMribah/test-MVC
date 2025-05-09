	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.loadingCaption="be bee";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingPicture="../files/mobile-ext/loadingPicture.png";bookConfig.loadingBackground="#000000";bookConfig.appLogoIcon="../files/mobile-ext/appLogoIcon.png";bookConfig.HomeURL="%first page%";bookConfig.appLogoOpenWindow="Blank";bookConfig.toolbarColor="#000000";bookConfig.iconColor="#CCCCCC";bookConfig.pageNumColor="#333333";bookConfig.FlipSound="Enable";bookConfig.QRCode="Hide";bookConfig.logoHeight="25";bookConfig.logoPadding="10";bookConfig.logoTop="8";bookConfig.HomeButtonVisible="Hide";bookConfig.ShareButtonVisible="Show";bookConfig.ThumbnailsButtonVisible="Show";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.ZoomButtonVisible="Show";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Hide";bookConfig.bookmarkBackground="#000000";bookConfig.bookmarkFontColor="#cccccc";bookConfig.SearchButtonVisible="Show";bookConfig.leastSearchChar="3";bookConfig.searchFontColor="#000000";bookConfig.PrintButtonVisible="Yes";bookConfig.BackgroundSoundButtonVisible="Enable";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="Yes";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.minZoomWidth="700";bookConfig.minZoomHeight="518";bookConfig.mouseWheelFlip="yes";bookConfig.DownloadButtonVisible="Hide";bookConfig.bgBeginColor="#1F2232";bookConfig.bgEndColor="#1F2232";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="../files/mobile-ext/backGroundImgURL.jpg";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.6";bookConfig.pageBackgroundColor="#FFFFFF";bookConfig.flipshortcutbutton="Show";bookConfig.HardPageEnable="No";bookConfig.RightToLeft="No";bookConfig.flippingTime="0.3";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.showDoublePage="Yes";bookConfig.addPaperCoil="No";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.LinkDownColor="#800080";bookConfig.LinkAlpha="0.2";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.totalPageCount=44;bookConfig.largePageWidth=1684;bookConfig.largePageHeight=2179;bookConfig.bookTitle="Manuel d'utilisation EASYBEE";bookConfig.productName="Flip PDF";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="javascript/search_config.js";bookConfig.searchTextJS="javascript/search_config.js";bookConfig.normalPath="../files/mobile/";bookConfig.largePath="../files/mobile/";bookConfig.thumbPath="../files/thumb/";var language = [{ language : "French",btnFirstPage:"Première page",btnNextPage:"Page suivante",btnLastPage:"Dernière page",btnPrePage:"Page précédente",btnDownload:"Télécharger",btnPrint:"Imprimer",btnSearch:"Recherche",btnClearSearch:"Vider",btnBookMark:"Table des matières",btnHelp:"Aide",btnFullScreen:"Plein écran",btnDisableFullScreen:"Fenêtre",btnSoundOn:"Son",btnSoundOff:"Muet",btnShareEmail:"Partager",btnSocialShare:"Réseaux sociaux",btnZoomIn:"Zoom en",btnZoomOut:"Zoom hors",btnDragToMove:"Drag move mode",btnAutoFlip:"Auto Flip",btnStopAutoFlip:"Stop Auto Flip",btnGoToHome:"Début",frmHelpCaption:"Aide",frmHelpTip1:"Double click pour zoom In ou OUT",frmHelpTip2:"Tirer sur le coin de page",frmPrintCaption:"Imprimer",frmPrintBtnCaption:"Imprimer",frmPrintPrintAll:"Imprimer toutes les pages",frmPrintPrintCurrentPage:"Imprimer la page actuelle",frmPrintPrintRange:"Print Range",frmPrintExampleCaption:"Exemple: 2,5,8-26",frmPrintPreparePage:"Préparation de la page :",frmPrintPrintFailed:"Défaillance de l'impression",pnlSearchInputInvalid:"(La requette minimale et de 3 caractères",loginCaption:"Connexion",loginInvalidPassword:"Mot de passe invalide",loginPasswordLabel:"Mot de passe :",loginBtnLogin:"Connexion",loginBtnCancel:"Annuler",btnThumb:"Thumbnails",lblPages:"Pages :",lblPagesFound:"Pages :",lblPageIndex:"Page",btnAbout:"A propos",frnAboutCaption:"A propos et contact",btnSinglePage:"Page simple",btnDoublePage:"Double page",btnSwicthLanguage:"Changer de langue",tipChangeLanguage:"SVP sélectionnez la langue ci-contre",btnMoreOptionsLeft:"Plus d'options",btnMoreOptionsRight:"Plus d'options",btnFit:"Ajuster à la fenêtre",smallModeCaption:"Cliquez pour voir en plein écran",btnAddAnnotation:"Ajouter Annotations",btnAnnotation:"Annotations",FlipPageEditor_SaveAndExit:"Sauvegardez et quittez",FlipPageEditor_Exit:"Quitter",DrawToolWindow_Redo:"Refaire",DrawToolWindow_Undo:"Annuler",DrawToolWindow_Clear:"Vider",DrawToolWindow_Brush:"Brosse",DrawToolWindow_Width:"Largeur ",DrawToolWindow_Alpha:"Alpha",DrawToolWindow_Color:"Couleur",DrawToolWindow_Eraser:"Gomme",DrawToolWindow_Rectangular:"Rectangulaire",DrawToolWindow_Ellipse:"Ellipse",TStuff_BorderWidth:"Bordure Largeur",TStuff_BorderAlph:"Bordure Alpha",TStuff_BorderColor:"Bordure Couleur",DrawToolWindow_TextNote:"Text Note",AnnotMark:"Marque page",lastpagebtnHelp:"Dernière page",firstpagebtnHelp:"Première page",homebtnHelp:"Retour à la page d'accueil",aboubtnHelp:"À propos",screenbtnHelp:"Ouvrez cette application dans une fenêtre plein",helpbtnHelp:"Ouvrez la fenêtre d'aide",searchbtnHelp:"Recherche de pages",pagesbtnHelp:"Jetez un oeil à la miniaturede cette brochure",bookmarkbtnHelp:"Ouvrez un marque-page",AnnotmarkbtnHelp:"Ouvrez Table des matières",printbtnHelp:"Imprimer la brochure",soundbtnHelp:"Activer ou désactiver le son",sharebtnHelp:"Envoyer un message",socialSharebtnHelp:"Envoyer un message",zoominbtnHelp:"Zoomer",downloadbtnHelp:"Télécharger la brochure",pagemodlebtnHelp:"Page Uniqe et double",languagebtnHelp:"Mettez Lauguage",annotationbtnHelp:"Ajouter des Annotations",addbookmarkbtnHelp:"Ajouter Marque-page",removebookmarkbtnHelp:"Supprimer Marque-page",updatebookmarkbtnHelp:"Mettre à jour Marque-page",btnShoppingCart:"Panier d'Achat",Help_ShoppingCartbtn:"Panier d'Achat",Help_btnNextPage:"Page Suivante",Help_btnPrePage:"Page Précédente",Help_btnAutoFlip:"Auto filp",Help_StopAutoFlip:"Arrêter atuo filp",btnaddbookmark:"Ajouter",btndeletebookmark:"Supprimer",btnupdatebookmark:"Mettre à Jour",frmyourbookmarks:"Vos marque-pages",frmitems:"articles",DownloadFullPublication:"Publication Complète ",DownloadCurrentPage:"Page Actuelle",DownloadAttachedFiles:"Fichiers Joints",lblLink:"Lien",btnCopy:"Copier Bouton",restorePage:"Voulez-vous restaurer la session précédente",tmpl_Backgoundsoundon:"Acitver Son de Fond",tmpl_Backgoundsoundoff:"Désactiver Son de Fond",tmpl_Flipsoundon:"Acitver Son de Flip",tmpl_Flipsoundoff:"Désactiver Son de Flip",Help_PageIndex:"Le numéro de la page actuelle",tmpl_PrintPageRanges:"Intervalle de Pages",tmpl_PrintPreview:"Pré-visualiser",btnSelection:"Sélectionnez Texte",loginNameLabel:"Nom:",btnGotoPage:"Aller",btnSettings:"Paramètres",soundSettingTitle:"Paramètres de Son",closeFlipSound:"Fermer Son de Flip",closeBackgroundSound:"Fermer Son de Fond",frmShareCaption:"Partager",frmShareLinkLabel:"Lien:",frmShareBtnCopy:"Copier",frmShareItemsGroupCaption:"Partager sur Réseaux Sociaux",TAnnoActionPropertyStuff_GotoPage:"Aller à La Page",btnPageBack:"Reculer",btnPageForward:"Avancer",SelectTextCopy:"Copier Texte",selectCopyButton:"Copier",TStuffCart_TypeCart:"Panier d'Achat",TStuffCart_DetailedQuantity:"Quantité ",TStuffCart_DetailedPrice:"Prix",ShappingCart_Close:"Fermer",ShappingCart_CheckOut:"Caisse",ShappingCart_Item:"Article",ShappingCart_Total:"Total",ShappingCart_AddCart:"Ajouter au Panier",ShappingCart_InStock:"en Stock",TStuffCart_DetailedCost:"Livraison",TStuffCart_DetailedTime:"Délai de livraison",TStuffCart_DetailedDay:"jour(s)",ShappingCart_NotStock:"Not enough en stock",btnCrop:"Couper"},{ language : "English",btnFirstPage:"First",btnNextPage:"Next Page",btnLastPage:"Last",btnPrePage:"Previous Page",btnDownload:"Download",btnPrint:"Print",btnSearch:"Search",btnClearSearch:"Clear",btnBookMark:"Table of content",btnHelp:"Help",btnFullScreen:"Enable FullScreen",btnDisableFullScreen:"Disable FullScreen",btnSoundOn:"Sound On",btnSoundOff:"Sound Off",btnShareEmail:"Share",btnSocialShare:"Social Share",btnZoomIn:"Zoom In",btnZoomOut:"Zoom Out",btnDragToMove:"Move by mouse drag",btnAutoFlip:"Auto Flip",btnStopAutoFlip:"Stop Auto Flip",btnGoToHome:"Return Home",frmHelpCaption:"Help",frmHelpTip1:"Double click to zoom in or out",frmHelpTip2:"Drag the page corner to view",frmPrintCaption:"Print",frmPrintBtnCaption:"Print",frmPrintPrintAll:"Print All Pages",frmPrintPrintCurrentPage:"Print Current Page",frmPrintPrintRange:"Print Range",frmPrintExampleCaption:"Example: 2,5,8-26",frmPrintPreparePage:"Preparing Page:",frmPrintPrintFailed:"Print Failed:",pnlSearchInputInvalid:"(Minimal request length is 3 symbols)",loginCaption:"Login",loginInvalidPassword:"Not a valid password!",loginPasswordLabel:"Password:",loginBtnLogin:"Login",loginBtnCancel:"Cancel",btnThumb:"Thumbnails",lblPages:"Pages:",lblPagesFound:"Pages:",lblPageIndex:"Page",btnAbout:"About",frnAboutCaption:"About & Contact",btnSinglePage:"Single Page",btnDoublePage:"Double Page",btnSwicthLanguage:"Switch Language",tipChangeLanguage:"Please select a language below...",btnMoreOptionsLeft:"More Options",btnMoreOptionsRight:"More Options",btnFit:"Fit Window",smallModeCaption:"Click to view in fullscreen",btnAddAnnotation:"Add Annotations",btnAnnotation:"Annotations",FlipPageEditor_SaveAndExit:"Save and Exit",FlipPageEditor_Exit:"Exit",DrawToolWindow_Redo:"Redo",DrawToolWindow_Undo:"Undo",DrawToolWindow_Clear:"Clear",DrawToolWindow_Brush:"Brush",DrawToolWindow_Width:"Width",DrawToolWindow_Alpha:"Alpha",DrawToolWindow_Color:"Color",DrawToolWindow_Eraser:"Eraser",DrawToolWindow_Rectangular:"Rectangular",DrawToolWindow_Ellipse:"Ellipse",TStuff_BorderWidth:"Border Width",TStuff_BorderAlph:"Border Alpha",TStuff_BorderColor:"Border Color",DrawToolWindow_TextNote:"Text Note",AnnotMark:"Book Mark",lastpagebtnHelp:"Last page",firstpagebtnHelp:"First page",homebtnHelp:"Return to home page",aboubtnHelp:"About",screenbtnHelp:"Open this application in full-screen mode",helpbtnHelp:"Show help",searchbtnHelp:"Search from pages",pagesbtnHelp:"Take a look at the thumbnail of this brochure",bookmarkbtnHelp:"Open Bookmark",AnnotmarkbtnHelp:"Open Table of content",printbtnHelp:"Print the brochure",soundbtnHelp:"Turn on or off the sound",sharebtnHelp:"Send Email to",socialSharebtnHelp:"Social Share",zoominbtnHelp:"Zoom in",downloadbtnHelp:"Downdlaod this brochure",pagemodlebtnHelp:"Switch Single and double page mode",languagebtnHelp:"Switch Lauguage",annotationbtnHelp:"Add Annotation",addbookmarkbtnHelp:"Add Bookmark",removebookmarkbtnHelp:"Remove BookMark",updatebookmarkbtnHelp:"Update Bookmark",btnShoppingCart:"Shopping Cart",Help_ShoppingCartbtn:"Shopping Cart",Help_btnNextPage:"Next page",Help_btnPrePage:"Previous page",Help_btnAutoFlip:"Auto filp",Help_StopAutoFlip:"Stop atuo filp",btnaddbookmark:"Add",btndeletebookmark:"Delete",btnupdatebookmark:"Update",frmyourbookmarks:"Your bookmarks",frmitems:"items",DownloadFullPublication:"Full Publication",DownloadCurrentPage:"Current Page",DownloadAttachedFiles:"Attached Files",lblLink:"Link",btnCopy:"Copy Button",restorePage:"Would you like to restore previous session",tmpl_Backgoundsoundon:"Background Sound On",tmpl_Backgoundsoundoff:"Background Sound Off",tmpl_Flipsoundon:"Flip Sound On",tmpl_Flipsoundoff:"Flip Sound Off",Help_PageIndex:"The current page number",tmpl_PrintPageRanges:"PAGE RANGES",tmpl_PrintPreview:"PREVIEW",btnSelection:"Select Text",loginNameLabel:"Name:",btnGotoPage:"Go",btnSettings:"Setting",soundSettingTitle:"Sound Setting",closeFlipSound:"Close Flip Sound",closeBackgroundSound:"Close Backgorund Sound",frmShareCaption:"Share",frmShareLinkLabel:"Link:",frmShareBtnCopy:"Copy",frmShareItemsGroupCaption:"Social Share",TAnnoActionPropertyStuff_GotoPage:"Go to page",btnPageBack:"Back",btnPageForward:"Forward",SelectTextCopy:"Copy Text",selectCopyButton:"Copy",TStuffCart_TypeCart:"Shopping Cart",TStuffCart_DetailedQuantity:"Quantity",TStuffCart_DetailedPrice:"Price",ShappingCart_Close:"Close",ShappingCart_CheckOut:"Checkout",ShappingCart_Item:"Item",ShappingCart_Total:"Total",ShappingCart_AddCart:"Add to cart",ShappingCart_InStock:"In Stock",TStuffCart_DetailedCost:"Shipping cost",TStuffCart_DetailedTime:"Delivery time",TStuffCart_DetailedDay:"day(s)",ShappingCart_NotStock:"Not enough in stock",btnCrop:"Crop"},{ language : "German",btnFirstPage:"zum Anfang",btnNextPage:"weiter blättern",btnLastPage:"zum Ende",btnPrePage:"zurück blättern",btnDownload:"Download",btnPrint:"Drucken",btnSearch:"Suche",btnClearSearch:"Leeren",btnBookMark:"Mehr Optionen ...",btnHelp:"Hilfe",btnFullScreen:"Vollbild an",btnDisableFullScreen:"Vollbild aus",btnSoundOn:"Ton an",btnSoundOff:"Ton aus",btnShareEmail:"Teilen",btnSocialShare:"Soziale Netzwerke",btnZoomIn:"Vergrößern",btnZoomOut:"Verkleinern",btnDragToMove:"Verschieben im Zoom-Modus",btnAutoFlip:"Auto-Flipp",btnStopAutoFlip:"Stop Auto-Flipp",btnGoToHome:"Home",frmHelpCaption:"Hilfe",frmHelpTip1:"Vergrößern mit Doppelklick",frmHelpTip2:"Mit der Maus an der Ecke ziehen",frmPrintCaption:"Drucken",frmPrintBtnCaption:"Drucken",frmPrintPrintAll:"Alle Seiten drucken",frmPrintPrintCurrentPage:"Aktuelle Seite drucken",frmPrintPrintRange:"Drucke Seiten: ...",frmPrintExampleCaption:"Beispiel: 2,5,8-26",frmPrintPreparePage:"Seite wird vorbereitet",frmPrintPrintFailed:"Fehler beim Drucken",pnlSearchInputInvalid:"Mindestens 3 Zeichen eingeben",loginCaption:"Passwort",loginInvalidPassword:"Falsches Passwort!",loginPasswordLabel:"Passwort:",loginBtnLogin:"Login",loginBtnCancel:"Korrektur",btnThumb:"Seitenübersicht",lblPages:"Seiten:",lblPagesFound:"Seiten:",lblPageIndex:"Seite",btnAbout:"über uns ...",frnAboutCaption:"Info + Kontakt",btnSinglePage:"Einzelseite",btnDoublePage:"Doppelseite",btnSwicthLanguage:"Sprache ändern",tipChangeLanguage:"Wählen Sie eine Sprache aus",btnMoreOptionsLeft:"weitere Optionen",btnMoreOptionsRight:"weitere Optionen",btnFit:"Fenster anpassen",smallModeCaption:"Im Vollbildmodus anzeigen",btnAddAnnotation:"Anmerkungen hinzufügen",btnAnnotation:"Anmerkungen",FlipPageEditor_SaveAndExit:"Speichern und Beenden",FlipPageEditor_Exit:"Beenden",DrawToolWindow_Redo:"Wiederherstellen",DrawToolWindow_Undo:"Rückgängig",DrawToolWindow_Clear:"Säubern",DrawToolWindow_Brush:"Pinsel",DrawToolWindow_Width:"Breite",DrawToolWindow_Alpha:"Transparenz",DrawToolWindow_Color:"Farbe",DrawToolWindow_Eraser:"Radiergummi",DrawToolWindow_Rectangular:"Rechteckig",DrawToolWindow_Ellipse:"Ellipse",TStuff_BorderWidth:"Randbreite",TStuff_BorderAlph:"Rand Alpha",TStuff_BorderColor:"Randfarbe",DrawToolWindow_TextNote:"Text Note",AnnotMark:"Book Mark",lastpagebtnHelp:"Letzte Seite",firstpagebtnHelp:"Erste seite",homebtnHelp:"Zurück zur Startseite",aboubtnHelp:"Über",screenbtnHelp:"Öffnen im Vollbild-Modus",helpbtnHelp:"Öffnen Sie das Hilfe-Fenster",searchbtnHelp:"Suchen Sie auf den Seiten",pagesbtnHelp:"Werfen Sie einen Blick auf die Miniaturansicht der Broschüre",bookmarkbtnHelp:"Lesezeichen (Bookmark)",AnnotmarkbtnHelp:"Öffnen Sie ein Menü",printbtnHelp:"Broschüre drucken",soundbtnHelp:"Ton an oder aus",sharebtnHelp:"Nachricht senden",socialSharebtnHelp:"Nachricht senden",zoominbtnHelp:"Zoom in",downloadbtnHelp:"Download der Broschüre",pagemodlebtnHelp:"Einzelne und doppelte Seiten ",languagebtnHelp:"Sprachumschaltung",annotationbtnHelp:"Anmerkungen hinzufügen",addbookmarkbtnHelp:"Lesezeichen setzen",removebookmarkbtnHelp:"Lesezeichen entfernen",updatebookmarkbtnHelp:"Lesezeichen aktualisieren",btnShoppingCart:"Shopping Cart",Help_ShoppingCartbtn:"Shopping Cart",Help_btnNextPage:"Nächste Seite",Help_btnPrePage:"Vorige Seite",Help_btnAutoFlip:"Autoflipp",Help_StopAutoFlip:"Stop Autoflipp",btnaddbookmark:"Ausführen",btndeletebookmark:"Löschen",btnupdatebookmark:"Aktualisieren",frmyourbookmarks:"Ihre Lesezeichen",frmitems:"items",DownloadFullPublication:"Alles veröffentlichen",DownloadCurrentPage:"Aktuelle Seite",DownloadAttachedFiles:"Angehängte Dateien",lblLink:"Verknüpfungen (Links)",btnCopy:"Kopieren",restorePage:"Die vorherige Sitzung wiederherstellen?",tmpl_Backgoundsoundon:"Hintergrundmusik ein- oder ausschalten",tmpl_Backgoundsoundoff:"Keine Hintergrundmusik",tmpl_Flipsoundon:"Flip Sound JA",tmpl_Flipsoundoff:"Flip Sound NEIN",Help_PageIndex:"Laufende Seitennummer",tmpl_PrintPageRanges:"Seitenbereich drucken",tmpl_PrintPreview:"Vorschau",btnSelection:"Text markieren",loginNameLabel:"Name:",btnGotoPage:"Start",btnSettings:"Titel-Einstellung",soundSettingTitle:"Audio-Einstellung",closeFlipSound:"Kein Flipp-Sound",closeBackgroundSound:"Kein Hintergrund-Sound ",frmShareCaption:"Teilen",frmShareLinkLabel:"Link:",frmShareBtnCopy:"Copy",frmShareItemsGroupCaption:"Soziale Netzwerke ",TAnnoActionPropertyStuff_GotoPage:"Go to page",btnPageBack:"Back",btnPageForward:"Forward",SelectTextCopy:"Copy Text",selectCopyButton:"Copy",TStuffCart_TypeCart:"Shopping Cart",TStuffCart_DetailedQuantity:"Quantity",TStuffCart_DetailedPrice:"Price",ShappingCart_Close:"Close",ShappingCart_CheckOut:"Checkout",ShappingCart_Item:"Item",ShappingCart_Total:"Total",ShappingCart_AddCart:"Add to cart",ShappingCart_InStock:"In Stock",TStuffCart_DetailedCost:"Shipping cost",TStuffCart_DetailedTime:"Delivery time",TStuffCart_DetailedDay:"day(s)",ShappingCart_NotStock:"Not enough in stock",btnCrop:"Crop"},{ language : "Italian",btnFirstPage:"Prima",btnNextPage:"Pagina Successiva",btnLastPage:"Ultima",btnPrePage:"Pagina Precedente",btnDownload:"Download",btnPrint:"Stampa",btnSearch:"Cerca",btnClearSearch:"Clear",btnBookMark:"Indice dei contenuti",btnHelp:"Aiuto",btnFullScreen:"Abilita Schermo Intero",btnDisableFullScreen:"Disabilita Schermo Intero",btnSoundOn:"Sound On",btnSoundOff:"Sound Off",btnShareEmail:"Condividi",btnSocialShare:"Condividi con il tuo Social Network",btnZoomIn:"Zoom In",btnZoomOut:"Zoom Out",btnDragToMove:"Drag move mode",btnAutoFlip:"Auto Flip",btnStopAutoFlip:"Stop Auto Flip",btnGoToHome:"Torna alla HomePage",frmHelpCaption:"Aiuto",frmHelpTip1:"Doppio click per zoom in o out",frmHelpTip2:"Posizionati sull'angolo della pagine per vedere",frmPrintCaption:"Stampa",frmPrintBtnCaption:"Stampa",frmPrintPrintAll:"Stampa Tutte le Pagine",frmPrintPrintCurrentPage:"Stampa la Pagina Corrente",frmPrintPrintRange:"Stampa un Intervallo",frmPrintExampleCaption:"Esempio: 2,5,8-26",frmPrintPreparePage:"Sto preparando la pagina:",frmPrintPrintFailed:"Stampa Fallita:",pnlSearchInputInvalid:"(Lunghezza minima richiesta è 3 simboli)",loginCaption:"Login",loginInvalidPassword:"Password non valida!",loginPasswordLabel:"Password:",loginBtnLogin:"Login",loginBtnCancel:"Annulla",btnThumb:"Anteprima",lblPages:"Pagine:",lblPagesFound:"Pagine:",lblPageIndex:"Pagina",btnAbout:"About",frnAboutCaption:"About & Contatti",btnSinglePage:"Pagina Singola",btnDoublePage:"Pagina Doppia",btnSwicthLanguage:"Scegli la Lingua",tipChangeLanguage:"Per favore seleziona una lingua qui sotto...",btnMoreOptionsLeft:"Piu' Opzioni",btnMoreOptionsRight:"Piu' Opzioni",btnFit:"finestra Fit",smallModeCaption:"Clicca per vedere a schermo intero",btnAddAnnotation:"Aggiungi Annotazioni",btnAnnotation:"Annotazioni",FlipPageEditor_SaveAndExit:"Salvare e Uscire",FlipPageEditor_Exit:"Exit",DrawToolWindow_Redo:"Rrifare",DrawToolWindow_Undo:"Disfare",DrawToolWindow_Clear:"Chiaro",DrawToolWindow_Brush:"Spazzola",DrawToolWindow_Width:"Larghezza",DrawToolWindow_Alpha:"Alfa",DrawToolWindow_Color:"Colore",DrawToolWindow_Eraser:"Gomma",DrawToolWindow_Rectangular:"Rettangolare",DrawToolWindow_Ellipse:"Ellisse",TStuff_BorderWidth:"Bordo Larghezza",TStuff_BorderAlph:"Bordo Alpha",TStuff_BorderColor:"Testo Colore",DrawToolWindow_TextNote:"Text Note",AnnotMark:"Segnalibro",lastpagebtnHelp:"Ultima pagina",firstpagebtnHelp:"Prima pagina",homebtnHelp:"Ritorna alla home page",aboubtnHelp:"Circa",screenbtnHelp:"Aprire l'applicazione in modalità a schermo intero",helpbtnHelp:"Mostra di aiuto",searchbtnHelp:"Ricerca da pagine",pagesbtnHelp:"Date un'occhiata alla miniatura di questo opuscolo",bookmarkbtnHelp:"Aprire Segnalibro",AnnotmarkbtnHelp:"Aprire Indice dei contenuti",printbtnHelp:"Stampa la brochure",soundbtnHelp:"Attivare o disattivare l'audio",sharebtnHelp:"Invia e-mail a",socialSharebtnHelp:"Social Share",zoominbtnHelp:"Zoom in",downloadbtnHelp:"Scarica questa brochure",pagemodlebtnHelp:"Attivare la modalità pagina singola e doppia",languagebtnHelp:"Cambia Lingua",annotationbtnHelp:"Aggiungi annotazione",addbookmarkbtnHelp:"Add BookMark",removebookmarkbtnHelp:"Remove BookMark",updatebookmarkbtnHelp:"UpDate BookMark",btnShoppingCart:"Shopping Cart",Help_ShoppingCartbtn:"Shopping Cart",Help_btnNextPage:"Next page",Help_btnPrePage:"Previous page",Help_btnAutoFlip:"Auto filp",Help_StopAutoFlip:"Stop atuo filp",btnaddbookmark:"Add",btndeletebookmark:"Delete",btnupdatebookmark:"Update",frmyourbookmarks:"Your bookmarks",frmitems:"items",DownloadFullPublication:"Full Publication",DownloadCurrentPage:"Current Page",DownloadAttachedFiles:"Attached Files",lblLink:"Link",btnCopy:"Copy Button",restorePage:"Would you like to restore previous session",tmpl_Backgoundsoundon:"Background Sound On",tmpl_Backgoundsoundoff:"Background Sound Off",tmpl_Flipsoundon:"Flip Sound On",tmpl_Flipsoundoff:"Flip Sound Off",Help_PageIndex:"The current page number",tmpl_PrintPageRanges:"PAGE RANGES",tmpl_PrintPreview:"PREVIEW",btnSelection:"Select Text",loginNameLabel:"Name:",btnGotoPage:"Go",btnSettings:"Setting",soundSettingTitle:"Sound Setting",closeFlipSound:"Close Flip Sound",closeBackgroundSound:"Close Backgorund Sound",frmShareCaption:"Share",frmShareLinkLabel:"Link:",frmShareBtnCopy:"Copy",frmShareItemsGroupCaption:"Social Share",TAnnoActionPropertyStuff_GotoPage:"Go to page",btnPageBack:"Back",btnPageForward:"Forward",SelectTextCopy:"Copy Text",selectCopyButton:"Copy",TStuffCart_TypeCart:"Shopping Cart",TStuffCart_DetailedQuantity:"Quantity",TStuffCart_DetailedPrice:"Price",ShappingCart_Close:"Close",ShappingCart_CheckOut:"Checkout",ShappingCart_Item:"Item",ShappingCart_Total:"Total",ShappingCart_AddCart:"Add to cart",ShappingCart_InStock:"In Stock",TStuffCart_DetailedCost:"Shipping cost",TStuffCart_DetailedTime:"Delivery time",TStuffCart_DetailedDay:"day(s)",ShappingCart_NotStock:"Not enough in stock",btnCrop:"Crop"},{ language : "Portuguese",btnFirstPage:"Primeira página",btnNextPage:"Página seguinte",btnLastPage:"Última página",btnPrePage:"Página anterior",btnDownload:"Transferir",btnPrint:"Imprimir",btnSearch:"Buscar",btnClearSearch:"Limpar",btnBookMark:"Índice",btnHelp:"Ajuda",btnFullScreen:"Ativar tela cheia",btnDisableFullScreen:"Desativar tela cheia",btnSoundOn:"Som ligado",btnSoundOff:"Som desligado",btnShareEmail:"Compartilhar",btnSocialShare:"Compartilhar",btnZoomIn:"Ampliar",btnZoomOut:"Reduzir",btnDragToMove:"Mover ao arrastar o mouse",btnAutoFlip:"Virar automaticamente",btnStopAutoFlip:"Parar de virar automaticamente",btnGoToHome:"Voltar ao começo",frmHelpCaption:"Ajuda",frmHelpTip1:"Duplo clique para ampliar ou reduzir",frmHelpTip2:"Arrastar o canto da página para visualizar",frmPrintCaption:"Imprimir",frmPrintBtnCaption:"Imprimir",frmPrintPrintAll:"Imprimir todas as páginas",frmPrintPrintCurrentPage:"Imprimir página atual",frmPrintPrintRange:"Intervalo de páginas",frmPrintExampleCaption:"Ex.: 2,5,8-26",frmPrintPreparePage:"Preparando páginas:",frmPrintPrintFailed:"Erro ao Imprimir:",pnlSearchInputInvalid:"O texto de busca é muito pequeno.",loginCaption:"Iniciar sessão",loginInvalidPassword:"Senha incorreta",loginPasswordLabel:"Senha:",loginBtnLogin:"Ingressar",loginBtnCancel:"Cancelar",btnThumb:"Miniaturas",lblPages:"Páginas:",lblPagesFound:"Páginas:",lblPageIndex:"Página",btnAbout:"Sobre",frnAboutCaption:"Sobre e contato",btnSinglePage:"Página simples",btnDoublePage:"Página dupla",btnSwicthLanguage:"Alterar idioma",tipChangeLanguage:"Selecione um idioma abaixo...",btnMoreOptionsLeft:"Mais opções",btnMoreOptionsRight:"Mais opções",btnFit:"Ajustar à janela",smallModeCaption:"Clique para visualizar em tela cheia",btnAddAnnotation:"Adicionar anotações",btnAnnotation:"Anotações",FlipPageEditor_SaveAndExit:"Salvar e sair",FlipPageEditor_Exit:"Sair",DrawToolWindow_Redo:"Refazer",DrawToolWindow_Undo:"Desfazer",DrawToolWindow_Clear:"Limpar",DrawToolWindow_Brush:"Pincel",DrawToolWindow_Width:"Largura",DrawToolWindow_Alpha:"Alfa",DrawToolWindow_Color:"Cor",DrawToolWindow_Eraser:"Borracha",DrawToolWindow_Rectangular:"Retângulo",DrawToolWindow_Ellipse:"Elipse",TStuff_BorderWidth:"Largura da borda",TStuff_BorderAlph:"Transparência da borda",TStuff_BorderColor:"Cor da borda",DrawToolWindow_TextNote:"Nota de texto",AnnotMark:"Marcador de livro",lastpagebtnHelp:"Última página",firstpagebtnHelp:"Primeira página",homebtnHelp:"Retornar à página inicial",aboubtnHelp:"Sobre",screenbtnHelp:"Abrir este aplicativo no modo de tela cheia",helpbtnHelp:"Mostrar Ajuda",searchbtnHelp:"Busca de páginas",pagesbtnHelp:"Dê uma olhada na miniatura deste livreto",bookmarkbtnHelp:"Abrir marcador",AnnotmarkbtnHelp:"Abrir índice",printbtnHelp:"Imprimir o livreto",soundbtnHelp:"Ligar ou desligar o som",sharebtnHelp:"Enviar por e-mail",socialSharebtnHelp:"Compartilhar",zoominbtnHelp:"Ampliar",downloadbtnHelp:"Transferir este livreto",pagemodlebtnHelp:"Alternar modo de página simples e dupla",languagebtnHelp:"Aternar idioma",annotationbtnHelp:"Adicionar anotação",addbookmarkbtnHelp:"Adicionar marcador",removebookmarkbtnHelp:"Remover marcador",updatebookmarkbtnHelp:"Atualizar marcador",btnShoppingCart:"Carrinho de compra",Help_ShoppingCartbtn:"Carrinho de compra",Help_btnNextPage:"Página seguinte",Help_btnPrePage:"Página anterior",Help_btnAutoFlip:"Virar automaticamente",Help_StopAutoFlip:"Parar de virar automaticamente",btnaddbookmark:"Adicionar",btndeletebookmark:"Apagar",btnupdatebookmark:"Atualizar",frmyourbookmarks:"Seus marcadores",frmitems:"itens",DownloadFullPublication:"Publicação completa",DownloadCurrentPage:"Página atual",DownloadAttachedFiles:"Arquivos anexos",lblLink:"Etiqueta do link para compartilhar",btnCopy:"Botão copiar",restorePage:"Você gostaria de restaurar a sessão anterior?",tmpl_Backgoundsoundon:"Ativar som de fundo",tmpl_Backgoundsoundoff:"Desativar som de fundo",tmpl_Flipsoundon:"Ativar som ao virar",tmpl_Flipsoundoff:"Desativar som ao virar",Help_PageIndex:"Número de página atual",tmpl_PrintPageRanges:"INTERVALOS DE PÁGINA",tmpl_PrintPreview:"VISUALIZAÇÃO",btnSelection:"Selecionar texto",loginNameLabel:"Nome:",btnGotoPage:"Ir",btnSettings:"Configurações",soundSettingTitle:"Configurar som",closeFlipSound:"Fechar som ao virar",closeBackgroundSound:"Fechar som de fundo",frmShareCaption:"Compartilhar",frmShareLinkLabel:"Link:",frmShareBtnCopy:"Copiar",frmShareItemsGroupCaption:"Compartilhar na rede social",TAnnoActionPropertyStuff_GotoPage:"Ir para página",btnPageBack:"Anterior",btnPageForward:"Seguinte",SelectTextCopy:"Copiar texto",selectCopyButton:"Copiar",TStuffCart_TypeCart:"Carrinho de compras",TStuffCart_DetailedQuantity:"Quantidade",TStuffCart_DetailedPrice:"Preço",ShappingCart_Close:"Fechar",ShappingCart_CheckOut:"Verificar",ShappingCart_Item:"Item",ShappingCart_Total:"Total",ShappingCart_AddCart:"Adicionar ao carrinho",ShappingCart_InStock:"Em estoque",TStuffCart_DetailedCost:"Custo de frete",TStuffCart_DetailedTime:"Tempo de entrega",TStuffCart_DetailedDay:"dia(s)",ShappingCart_NotStock:"Não o suficiente em estoque",btnCrop:"Cortar"}];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = [[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.112092",y:"0.160051",width:"0.775000",height:"0.024609"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"2"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.112092",y:"0.184659",width:"0.775000",height:"0.024609"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"10"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.112092",y:"0.209268",width:"0.775000",height:"0.024609"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"21"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.112092",y:"0.233876",width:"0.775000",height:"0.024609"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"24"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.112092",y:"0.258485",width:"0.775000",height:"0.024609"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"28"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.112092",y:"0.283093",width:"0.775000",height:"0.024609"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"38"}}],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
	bookConfig.hideMiniFullscreen=true;
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}
