export const he = {
    login: {
      unauthenticated: "החשבון לא ניתן לאימות. אם אתה חושב שאתה מקבל הודעה זו בטעות, נא ליצור קשר עם המנהל שלך.",
      successText: "האימייל שלך אומת. ממתין לאישור החשבון.",
      successButton: "אישור",
      missingCredentials: "נא להזין את פרטי הכניסה שלך",
      missingAccount: "אין לך חשבון?",
      signUp: "הרשמה"
    },
    forgotPassword: {
      successText: "בדוק את האימייל שלך לקישור לאיפוס הסיסמה. אם הקישור לא מופיע בתוך כמה דקות, נא לבדוק את תיקיית הספאם שלך.",
      successButton: "חזור לדף הבית",
      heading: "שחזור סיסמה",
      subHeading: "נא להזין את כתובת האימייל המאומתת של חשבונך ואנחנו נשלח אליך קישור לאיפוס הסיסמה.",
      placeholderEmail: "אימייל",
      buttonIdle: "שלח דוא\"ל לאיפוס סיסמה",
      buttonSubmitting: "שולח...",
      missingEmail: "נא להזין את כתובת האימייל שלך"
    },
    resetPassword: {
      successText: "איפוס הסיסמה בוצע בהצלחה.",
      successButton: "חזור להתחברות",
      heading: "שינוי סיסמה",
      placeholderPassword: "סיסמה",
      placeholderConfirmPassword: "אשר סיסמה",
      buttonIdle: "שנה סיסמה",
      buttonSubmitting: "שולח...",
      confirmPasswordFail: "הסיסמאות חייבות להתאים",
      missingPassword: "יש להזין את הסיסמה"
    },
    registration: {
      successText: "נא לבדוק את האימייל שלך כדי לאמת את הכתובת שלך.",
      alreadyCreated: "כבר יש לך חשבון?",
      login: "התחבר כאן"
    },
    productVersion: {
        deprecatedWarningProduct: 'גרסת המוצר הזו אינה בשימוש יותר. הנקודות הסיום יישארו פעילות עד שגרסה זו תיחדש.',
        unableToRetrieveDoc: 'לא ניתן לאחזר את התיעוד',
        noProductVersionsDetail: 'לא נרשמה אף גרסת מוצר עבור אפליקציה זו',
        noProductVersionsTitle: 'אין גרסאות מוצר',
        registerProductVersion: 'רישום גרסת מוצר'
    },
      userDropdown: {
        myApps: 'האפליקציות שלי',
        logout: 'התנתקות'
    },
      sectionOverview: {
        title: 'סקירה כללית'
    },
      viewSpecModal: {
        viewSpec: 'הצג מפרט',
        copy: 'העתק',
        download: 'הורדה',
        close: 'סגור',
        copySuccess: 'הועתק ללוח',
        copyError: 'נכשל להעתיק את המזהה ללוח'
    },
    credentials: {
        noCredentialsText: 'אין פרטי אימות',
        title: 'אימות',
        newButtonText: 'צור פרטי אימות',
        copySubheading: 'פרטי אימות עבור ',
        creationModal: {
          title: 'שם לפרט האימות',
          continueButton: 'צור',
          inputLabel: 'שם',
          inputPlaceholder: 'ספק שם עבור פרט האימות הזה',
          cancelButton: 'ביטול'
        },
        revokeModal: {
      title: 'ביטול הפרטי אימות',
      description: {
        start: 'המפתח ',
        end: ' יבוטל, לא ניתן לבטל פעולה זו.'
      },
      revokeButton: 'ביטול',
      cancelButton: 'ביטול'
    },
    renameModal: {
      actionLabel: 'עריכה',
      title: 'ערוך שם לפרטי אימות',
      continueButton: 'שמור',
      inputLabel: 'שם',
      inputPlaceholder: 'ספק שם חדש עבור פרטי האימות הללו',
      cancelButton: 'ביטול'
    },
    copyModal: {
      title: 'העתק פרטי אימות',
      continueButton: 'אשר והעתק',
      copyButtonLabel: 'פרטי אימות: ',
      cancelButton: 'ביטול',
      hiddenCredentialsText: 'תוכל להעתיק את פרטי האימות הללו פעם אחת בלבד. נא להעתיק ולשמור אותם במקום מאובטח.'
    }
  },
  
  application: {
    breadcrumbMyApps: 'האפליקציות שלי',
    edit: 'ערוך',
    cancel: 'ביטול',
    delete: 'מחק',
    proceed: 'המשך',
    applicationName: 'שם האפליקציה ',
    clientID: 'מזהה לקוח (Client ID): ',
    clientSecret: 'סוד הלקוח (Client Secret): ',
    reqField: ' מציין שדה חובה',
    redirectUriLabel: 'Redirect URI (כתובת להפנייה)',
    applicationCredentials: 'פרטי האפליקציה',
    applicationSecret: 'סוד האפליקציה',
    confirmDelete: (name: any) => `האם אתה בטוח שברצונך למחוק את ${name}? פעולה זו אינה ניתנת לביטול`,
    description: 'תיאור',
    redirectUri: (uri: string) => `כתובת ההפנייה (Redirect URI): ${uri}`,
    referenceId: (id: string) => `מזהה ההפנייה (Reference ID): ${id}`,
    form: {
      referenceId: {
        label: 'מזהה ההפנייה (Reference ID)',
        help: 'חייב להתאים למזהה הלקוח של יישות האפליקציה בספק הזהות שלך בשימוש OpenID',
        placeholder: 'הזן או צור מזהה',
        generate: 'צור'
      }
    },
    headerDescription1: 'כאן מידע הלקוח עבור האפליקציה שלך בשם ',
    headerDescription2: '. סוד הלקוח יוצג ',
    headerDescription3: 'בתוך מעט זמן.',
    headerDescription4: 'נא להעתיק את הערך הזה ולשמור אותו לרשומותיך.'
  },
  

    analytics: {
      filterLabelProductVersions: 'גרסאות מוצר',
      chartOverview: 'סקירת תרשים',
      chartTitleRequests: 'בקשות לפי גרסת מוצר',
      chartTitleLatency: 'עיכוב P99 לפי גרסת מוצר',
      chartTitle4xxProductVersion: 'שגיאות 4xx לפי גרסת מוצר',
      chartTitle5xxProductVersion: 'שגיאות 5xx לפי גרסת מוצר',
      chartTitle4xxStatusCode: 'שגיאות 4xx לפי קוד סטטוס',
      chartTitle5xxStatusCode: 'שגיאות 5xx לפי קוד סטטוס',
      dashboard: 'לוח מחוונים',
      resultsLimited: 'לא כל התוצאות מוצגות. אנא עדכן את החיפוש שלך לתוצאות נוספות.',
      notAvailable: 'לא זמין',
      sectionCurrent: 'נוכחי',
      sectionLast: 'אחרון',
      sectionPrevious: 'קודם',
      selectDateRange: 'בחר טווח תאריכים',
      selectProductVersions: 'בחר גרסאות מוצר',
      summary: 'סיכום',
      summary24Hours: '24 שעות',
      summary30Days: '30 ימים',
      summaryTooltip: (timespan: string) => `מציג סיכום של נתוני ניתוח עבור כל האפליקציות במשך ${timespan}`,
      timeRange: 'טווח זמן',
      totalRequests: 'סה"כ בקשות',
      unableToFetch: (itemName: string) => `לא ניתן לאחזר את ${itemName}`,
      viewAnalytics: 'צפה בניתוח'
    },
    productList: {
      titleProducts: 'מוצרים',
      actions: {
        unregister: 'בטל הרשמה'
      },
      emptyState: {
        titleProducts: 'אין מוצרים',
        viewCatalog1: 'צפה בקטלוג',
        viewCatalog2Product: 'כדי להירשם למוצר.'
      },
      labels: {
        nameProduct: 'מוצר',
        version: 'גרסה',
        status: 'סטטוס',
        actions: 'פעולות'
      }
    },
    dcrAuthentication: {
      authentication: 'אימות',
      refreshToken: 'רענון מזהה'
    },
  
      
        refreshTokenModal: {
          title: 'סוד האפליקציה',
          proceed: 'המשך',
          description1: 'הנה הסוד החדש של האפליקציה שלך. סוד הלקוח יוצג ',
          description2: 'בתוך מעט זמן בלבד. ',
          description3: 'נא להעתיק את הערך הזה ולשמור אותו לרשומותיך.',
          secret: 'סוד: '
        },
        applicationRegistration: {
          noAvailableApplications: 'כרגע אין לך אפליקציות לרישום.',
          noApplications: 'אין אפליקציות',
          selectApplication: 'בחר אפליקציה',
          createNewApplication: 'צור אפליקציה חדשה +',
          createApplication: 'צור אפליקציה',
          cancelButton: 'ביטול',
          registeredApplicationsProduct: 'האפליקציות הבאות כבר רשומות למוצר זה:',
          modalApplicationRegistrationDefault: {
            title: (serviceName: string, productVersion: string) => `רישום ל-${serviceName} - ${productVersion}`,
            buttonText: 'בקש גישה'
          },
          modalApplicationRegistrationStatusIsPending: {
            title: 'רישום בבדיקה',
            body: 'תישלח הודעה לך לאחר האישור.',
            buttonText: 'סגור'
          }
        },
        defaultForm: {
          missingFields: 'נא למלא את כל השדות החובה'
        },
        validationErrors: {
          isEmail: 'יש להזין כתובת דוא"ל חוקית'
        },
        apiDocumentation: {
          emptyTitle: 'אין תיעוד',
          emptyMessage: 'למוצר זה אין כרגע תיעוד. יש לפנות למנהל פורטל המפתחים אם זה לא מתוכנן.',
          error: {
            description: 'אירעה שגיאה לא צפויה בעת ניסיון לטעון את המסמך המבוקש. נא לנסות שוב מאוחר יותר',
            linkText: 'חזור לדף הבית →'
          },
          sections: {
            onThisPage: 'בדף זה'
          }
        },
        errorWrapper: {
          linkText: 'חזור לדף הבית →'
        },          
            sidebar: {
              noVersions: 'אין למוצר זה גרסאות מוצר פורסמות',
              deprecated: ' (לא בשימוש)',
              noResultsProduct: 'אין גרסאות מוצר'
            },
            catalog: {
              entityTypeProduct: 'מוצר',
              noResultsProduct: 'אין מוצרים מוצגים'
            },
            catalogItem: {
              latestVersion: 'גרסה אחרונה:',
              specificationLink: 'מפרט',
              documentationLink: 'תיעוד'
            },
            catalogTable: {
              specificationLink: 'מפרט',
              documentationLink: 'תיעוד'
            },
            products: {
              search: 'חיפוש',
              searching: 'מחפש...'
            },
            copyButton: {
              clickToCopy: 'לחץ להעתקה',
              copyToClipboard: 'העתק ללוח',
              ariaLabel: 'העתק תוכן ללוח',
              copyFailed: {
                start: 'נכשלה העתקת',
                end: 'ללוח'
              },
              copySucceeded: {
                start: '"',
                end: '" הועתק ללוח'
              }
            },
            nav: {
              catalog: 'קטלוג',
              breadcrumbProduct: 'מוצר',
              breadcrumbDocumentation: 'תיעוד',
              logoAlt: 'לוגו'
            },
            authCard: {
              logoAlt: 'לוגו'
            },
            forbidden: {
              logoAlt: 'לוגו',
              http403: '403',
              goBack: 'חזור',
              sorryMessage: 'מצטערים. אין לך הרשאה לצפייה בדף זה.',
              home: 'דף הבית'
            },
            notFound: {
              http404: '404',
              goBack: 'חזור',
              sorryMessage: 'מצטערים. אנחנו לא מוצאים את הדף שאתה מחפש.',
              home: 'דף הבית',
              logoAlt: 'לוגו'
            },
            myApp: {
              newApp: 'אפליקציה חדשה',
              plus: 'פלוס',
              myApps: 'האפליקציות שלי',
              refreshSecret: 'רענן סוד',
              delete: 'מחק',
              cancel: 'ביטול',
              noApp: 'אין אפליקציות',
              create: 'צור אפליקציה חדשה',
              getStarted: ' להתחיל',
              deleteDialog: (name: string) => `האם אתה בטוח שברצונך למחוק את ${name}? פעולה זו אינה ניתנת לביטול.`
            },
            router: {
              portalTitle: 'פורטל המפתחים',
              loginTitle: 'התחברות',
              registrationTitle: 'הרשמה',
              forgotPasswordTitle: 'שכחתי סיסמה',
              resetPasswordTitle: 'איפוס סיסמה',
              catalogTitleProduct: 'קטלוג מוצרים',
              specTitle: 'מפרט API',
              docsTitle: 'תיעוד API',
              appsTitle: 'האפליקציות שלי',
              createAppTitle: 'צור אפליקציה חדשה',
              createAppTitle2: 'צור אפליקציה',
              viewAppTitle: 'אפליקציה',
              updateAppTitle: 'עדכן אפליקציה',
              notFoundTitle: 'לא נמצא',
              forbiddenTitle: 'אסור',
              errorTitle: 'שגיאה'
            }
        
  };
