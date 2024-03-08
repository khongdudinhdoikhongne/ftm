{
  "datasets": [
    {
      "issue_levels": {},
      "issue_count": 0,
      "updated_at": "2024-03-07T17:53:01",
      "index_url": "https://cdn.jsdelivr.net/gh/khongdudinhdoikhongne/ftm@j/index.json",
      "issues_url": "https://cdn.jsdelivr.net/gh/khongdudinhdoikhongne/ftm@j/issues.json",
      "resources": [
        {
          "name": "entities.ftm.json",
          "url": "https://cdn.jsdelivr.net/gh/khongdudinhdoikhongne/ftm@jentities.ftm.json",
          "checksum": "b7e0fecaa2473f0e8f0181dd87bafd2c6bc8d997",
          "mime_type": "application/json+ftm",
          "mime_type_label": "FollowTheMoney Entities",
          "title": "FollowTheMoney entities",
          "size": 7729673,
          "path": "entities.ftm.json"
        },
        {
          "name": "names.txt",
          "url": "https://cdn.jsdelivr.net/gh/khongdudinhdoikhongne/ftm@jnames.txt",
          "checksum": "1e12304a0266054bf63903164878926ace94a4e7",
          "mime_type": "text/plain",
          "mime_type_label": "Plain text",
          "title": "Target names text file",
          "size": 647317,
          "path": "names.txt"
        },
        {
          "name": "senzing.json",
          "url": "https://cdn.jsdelivr.net/gh/khongdudinhdoikhongne/ftm@jsenzing.json",
          "checksum": "ed8d15ad16fd7feaf518d8a9d750c7374a0f7bf0",
          "mime_type": "application/json+senzing",
          "mime_type_label": "json+senzing",
          "title": "Senzing entity format",
          "size": 4466122,
          "path": "senzing.json"
        },
        {
          "name": "source.json",
          "url": "https://cdn.jsdelivr.net/gh/khongdudinhdoikhongne/ftm@j/source.json",
          "checksum": "7390770f3947aa54652d0b9e920b14993b42a479",
          "mime_type": "application/json",
          "mime_type_label": "JavaScript Object Notation",
          "title": "Source data",
          "size": 8292748,
          "path": "source.json"
        },
        {
          "name": "statistics.json",
          "url": "https://cdn.jsdelivr.net/gh/khongdudinhdoikhongne/ftm@j/statistics.json",
          "checksum": "709b3bf793bda67e8666d621de254adb44238666",
          "mime_type": "application/json",
          "mime_type_label": "JavaScript Object Notation",
          "title": "Dataset statistics",
          "size": 479,
          "path": "statistics.json"
        },
        {
          "name": "targets.nested.json",
          "url": "https://cdn.jsdelivr.net/gh/khongdudinhdoikhongne/ftm@jtargets.nested.json",
          "checksum": "b7e0fecaa2473f0e8f0181dd87bafd2c6bc8d997",
          "mime_type": "application/json",
          "mime_type_label": "JavaScript Object Notation",
          "title": "Targets as nested JSON",
          "size": 7729673,
          "path": "targets.nested.json"
        },
        {
          "name": "targets.simple.csv",
          "url": "https://cdn.jsdelivr.net/gh/khongdudinhdoikhongne/ftm@jtargets.simple.csv",
          "checksum": "b68595a8b7a2094f22a89706d45b1792a04a98da",
          "mime_type": "text/csv",
          "mime_type_label": "Comma-separated table",
          "title": "Targets as simplified CSV",
          "size": 2094560,
          "path": "targets.simple.csv"
        }
      ],
      "last_change": "2024-03-01T17:53:41",
      "schemata": ["Person"],
      "properties": [
        "Thing:createdAt",
        "Person:position",
        "Thing:alias",
        "Thing:name",
        "Thing:topics",
        "Person:gender",
        "Thing:notes",
        "Person:birthDate"
      ],
      "entity_count": 7940,
      "target_count": 7940,
      "targets": {
        "total": 7940,
        "countries": [],
        "schemata": [
          {
            "name": "Person",
            "count": 7940,
            "label": "Person",
            "plural": "People"
          }
        ]
      },
      "things": {
        "total": 7940,
        "countries": [],
        "schemata": [
          {
            "name": "Person",
            "count": 7940,
            "label": "Person",
            "plural": "People"
          }
        ]
      },
      "name": "wd_person",
      "title": "ACF List of bribetakers and warmongers",
      "summary": "A list of key Russian decision-makers from government and business composed by ACF/FBK, the anti-corruption investigative organization founded by Alexei Navalny",
      "description": "Putin and his accomplices (officials, oligarchs, propagandists), as well as > yachts and mansions, which, we hope, they will soon be deprived of.",
      "url": "https://acf.international/bribetakers-list",
      "coverage": {
        "start": "2022-05-05",
        "countries": [],
        "frequency": "daily"
      },
      "publisher": {
        "name": "Anti-Corruption Foundation (ACF)",
        "url": "https://acf.international/",
        "description": "ACF is the international division of Фонд борьбы с коррупцией (FBK), the anti-corruption\ninvestigative team founded by Alexei Navalny.",
        "country": "ru",
        "country_label": "Russia",
        "official": false
      },
      "hidden": false,
      "disabled": false,
      "data": {
        "url": "https://sanctions.acf.international/api/villains/",
        "format": "JSON"
      },
      "type": "source",
      "collections": ["all", "default"],
      "entry_point": "crawler.py",
      "last_export": "2024-03-07T17:53:01",
      "version": "20240307175301"
    }
  ],
  "run_time": "2024-03-08T15:40:01",
  "dataset_url": "https://data.opensanctions.org/datasets/20240308/",
  "statements_url": "https://data.opensanctions.org/datasets/20240308/latest/default/statements.csv",
  "model": {
    "schemata": {
      "Folder": {
        "label": "Folder",
        "plural": "Folders",
        "schemata": ["Analyzable", "Document", "Folder", "Thing"],
        "extends": ["Document"],
        "featured": ["title", "parent"],
        "caption": ["fileName", "title"],
        "generated": true,
        "properties": {
          "children": {
            "name": "children",
            "qname": "Folder:children",
            "label": "Child documents",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "hidden": true,
            "range": "Document",
            "reverse": "parent"
          },
          "descendants": {
            "name": "descendants",
            "qname": "Folder:descendants",
            "label": "Descendants",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "hidden": true,
            "range": "Document",
            "reverse": "ancestors"
          }
        }
      },
      "Table": {
        "label": "Table",
        "plural": "Tables",
        "schemata": ["Analyzable", "Document", "Table", "Thing"],
        "extends": ["Document"],
        "featured": ["title", "fileName", "mimeType", "parent"],
        "caption": ["title", "name", "fileName"],
        "description": "A document structured into rows and cells. This includes simple CSV files, spreadsheet sheets or database relations.\n",
        "generated": true,
        "properties": {
          "columns": {
            "name": "columns",
            "qname": "Table:columns",
            "label": "Column headings",
            "type": "json",
            "hidden": true
          },
          "rowCount": {
            "name": "rowCount",
            "qname": "Table:rowCount",
            "label": "Number of rows",
            "type": "number"
          },
          "csvHash": {
            "name": "csvHash",
            "qname": "Table:csvHash",
            "label": "CSV alternative version checksum",
            "type": "checksum",
            "hidden": true
          }
        }
      },
      "Contract": {
        "label": "Contract",
        "plural": "Contracts",
        "schemata": ["Asset", "Contract", "Thing", "Value"],
        "extends": ["Asset"],
        "temporalExtent": {
          "start": ["contractDate"],
          "end": []
        },
        "featured": ["title", "amount", "authority", "contractDate"],
        "required": ["title"],
        "caption": ["title", "name", "procedureNumber"],
        "description": "An contract or contract lot issued by an authority. Multiple lots may be awarded to different suppliers (see ContractAward).\n",
        "properties": {
          "title": {
            "name": "title",
            "qname": "Contract:title",
            "label": "Title",
            "type": "string"
          },
          "authority": {
            "name": "authority",
            "qname": "Contract:authority",
            "label": "Contract authority",
            "type": "entity",
            "matchable": true,
            "range": "LegalEntity",
            "reverse": "contractAuthority"
          },
          "project": {
            "name": "project",
            "qname": "Contract:project",
            "label": "Project",
            "type": "entity",
            "matchable": true,
            "range": "Project",
            "reverse": "contracts"
          },
          "type": {
            "name": "type",
            "qname": "Contract:type",
            "label": "Type",
            "type": "string",
            "description": "Type of contract. Potentially W (Works), U (Supplies), S (Services).\n"
          },
          "contractDate": {
            "name": "contractDate",
            "qname": "Contract:contractDate",
            "label": "Contract date",
            "type": "date",
            "matchable": true
          },
          "procedureNumber": {
            "name": "procedureNumber",
            "qname": "Contract:procedureNumber",
            "label": "Procedure number",
            "type": "string"
          },
          "procedure": {
            "name": "procedure",
            "qname": "Contract:procedure",
            "label": "Contract procedure",
            "type": "string"
          },
          "noticeId": {
            "name": "noticeId",
            "qname": "Contract:noticeId",
            "label": "Contract Award Notice ID",
            "type": "string"
          },
          "numberAwards": {
            "name": "numberAwards",
            "qname": "Contract:numberAwards",
            "label": "Number of awards",
            "type": "string"
          },
          "status": {
            "name": "status",
            "qname": "Contract:status",
            "label": "Status",
            "type": "string"
          },
          "method": {
            "name": "method",
            "qname": "Contract:method",
            "label": "Procurement method",
            "type": "string"
          },
          "criteria": {
            "name": "criteria",
            "qname": "Contract:criteria",
            "label": "Contract award criteria",
            "type": "string"
          },
          "classification": {
            "name": "classification",
            "qname": "Contract:classification",
            "label": "Classification",
            "type": "string"
          },
          "cancelled": {
            "name": "cancelled",
            "qname": "Contract:cancelled",
            "label": "Cancelled?",
            "type": "string"
          },
          "language": {
            "name": "language",
            "qname": "Contract:language",
            "label": "Language",
            "type": "language"
          },
          "paymentContract": {
            "name": "paymentContract",
            "qname": "Contract:paymentContract",
            "label": "Contractual payments",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Payment",
            "reverse": "contract"
          },
          "economicActivityContract": {
            "name": "economicActivityContract",
            "qname": "Contract:economicActivityContract",
            "label": "Used in customs",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "EconomicActivity",
            "reverse": "contract"
          },
          "awards": {
            "name": "awards",
            "qname": "Contract:awards",
            "label": "Lots awarded",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "ContractAward",
            "reverse": "contract"
          }
        }
      },
      "Email": {
        "label": "E-Mail",
        "plural": "E-Mails",
        "schemata": [
          "Analyzable",
          "Document",
          "Email",
          "Folder",
          "HyperText",
          "PlainText",
          "Thing"
        ],
        "extends": ["Folder", "HyperText", "PlainText"],
        "featured": ["subject", "date", "from"],
        "caption": ["subject", "threadTopic", "title", "name", "fileName"],
        "description": "An internet mail message. The body can be formatted as plain text and/or HTML, and the message may have any number of attachments.",
        "generated": true,
        "properties": {
          "subject": {
            "name": "subject",
            "qname": "Email:subject",
            "label": "Subject",
            "type": "string"
          },
          "threadTopic": {
            "name": "threadTopic",
            "qname": "Email:threadTopic",
            "label": "Thread topic",
            "type": "string"
          },
          "sender": {
            "name": "sender",
            "qname": "Email:sender",
            "label": "Sender",
            "type": "string"
          },
          "from": {
            "name": "from",
            "qname": "Email:from",
            "label": "From",
            "type": "string"
          },
          "to": {
            "name": "to",
            "qname": "Email:to",
            "label": "To",
            "type": "string"
          },
          "cc": {
            "name": "cc",
            "qname": "Email:cc",
            "label": "CC",
            "type": "string",
            "description": "Carbon copy"
          },
          "bcc": {
            "name": "bcc",
            "qname": "Email:bcc",
            "label": "BCC",
            "type": "string",
            "description": "Blind carbon copy"
          },
          "emitters": {
            "name": "emitters",
            "qname": "Email:emitters",
            "label": "Emitter",
            "type": "entity",
            "matchable": true,
            "range": "LegalEntity",
            "reverse": "emailsSent"
          },
          "recipients": {
            "name": "recipients",
            "qname": "Email:recipients",
            "label": "Recipients",
            "type": "entity",
            "matchable": true,
            "range": "LegalEntity",
            "reverse": "emailsReceived"
          },
          "inReplyTo": {
            "name": "inReplyTo",
            "qname": "Email:inReplyTo",
            "label": "In Reply To",
            "type": "string",
            "description": "Message ID of the preceding email in the thread",
            "hidden": true
          },
          "inReplyToEmail": {
            "name": "inReplyToEmail",
            "qname": "Email:inReplyToEmail",
            "label": "Responding to",
            "type": "entity",
            "matchable": true,
            "range": "Email",
            "reverse": "responses"
          },
          "headers": {
            "name": "headers",
            "qname": "Email:headers",
            "label": "Raw headers",
            "type": "json",
            "hidden": true
          },
          "responses": {
            "name": "responses",
            "qname": "Email:responses",
            "label": "Responses",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Email",
            "reverse": "inReplyToEmail"
          }
        }
      },
      "CryptoWallet": {
        "label": "Cryptocurrency wallet",
        "plural": "Cryptocurrency wallets",
        "schemata": ["CryptoWallet", "Thing", "Value"],
        "extends": ["Thing", "Value"],
        "temporalExtent": {
          "start": ["creationDate"],
          "end": []
        },
        "featured": ["currency", "publicKey"],
        "caption": ["publicKey", "name", "summary"],
        "description": "A cryptocurrency wallet is a view on the transactions conducted by one participant on a blockchain / distributed ledger system.\n",
        "matchable": true,
        "properties": {
          "publicKey": {
            "name": "publicKey",
            "qname": "CryptoWallet:publicKey",
            "label": "Address",
            "type": "identifier",
            "description": "Public key used to identify the wallet",
            "matchable": true
          },
          "privateKey": {
            "name": "privateKey",
            "qname": "CryptoWallet:privateKey",
            "label": "Private key",
            "type": "string"
          },
          "creationDate": {
            "name": "creationDate",
            "qname": "CryptoWallet:creationDate",
            "label": "Creation date",
            "type": "date",
            "matchable": true
          },
          "currencySymbol": {
            "name": "currencySymbol",
            "qname": "CryptoWallet:currencySymbol",
            "label": "Currency short code",
            "type": "string"
          },
          "mangingExchange": {
            "name": "mangingExchange",
            "qname": "CryptoWallet:mangingExchange",
            "label": "Managing exchange",
            "type": "string"
          },
          "holder": {
            "name": "holder",
            "qname": "CryptoWallet:holder",
            "label": "Wallet holder",
            "type": "entity",
            "matchable": true,
            "range": "LegalEntity",
            "reverse": "cryptoWallets"
          },
          "balance": {
            "name": "balance",
            "qname": "CryptoWallet:balance",
            "label": "Balance",
            "type": "number"
          },
          "balanceDate": {
            "name": "balanceDate",
            "qname": "CryptoWallet:balanceDate",
            "label": "Balance date",
            "type": "date",
            "matchable": true
          }
        }
      },
      "Document": {
        "label": "File",
        "plural": "Files",
        "schemata": ["Analyzable", "Document", "Thing"],
        "extends": ["Analyzable", "Thing"],
        "temporalExtent": {
          "start": ["authoredAt", "date", "publishedAt"],
          "end": []
        },
        "featured": ["title", "fileName", "mimeType", "parent"],
        "required": ["fileName"],
        "caption": ["fileName", "title"],
        "generated": true,
        "properties": {
          "contentHash": {
            "name": "contentHash",
            "qname": "Document:contentHash",
            "label": "Checksum",
            "type": "checksum",
            "description": "SHA1 hash of the data",
            "matchable": true
          },
          "title": {
            "name": "title",
            "qname": "Document:title",
            "label": "Title",
            "type": "string"
          },
          "author": {
            "name": "author",
            "qname": "Document:author",
            "label": "Author",
            "type": "string",
            "description": "The original author, not the uploader"
          },
          "generator": {
            "name": "generator",
            "qname": "Document:generator",
            "label": "Generator",
            "type": "string",
            "description": "The program used to generate this file"
          },
          "crawler": {
            "name": "crawler",
            "qname": "Document:crawler",
            "label": "Crawler",
            "type": "string",
            "description": "The crawler used to acquire this file"
          },
          "fileSize": {
            "name": "fileSize",
            "qname": "Document:fileSize",
            "label": "File size",
            "type": "number"
          },
          "fileName": {
            "name": "fileName",
            "qname": "Document:fileName",
            "label": "File name",
            "type": "string"
          },
          "extension": {
            "name": "extension",
            "qname": "Document:extension",
            "label": "File extension",
            "type": "string"
          },
          "encoding": {
            "name": "encoding",
            "qname": "Document:encoding",
            "label": "File encoding",
            "type": "string"
          },
          "bodyText": {
            "name": "bodyText",
            "qname": "Document:bodyText",
            "label": "Text",
            "type": "text",
            "hidden": true
          },
          "messageId": {
            "name": "messageId",
            "qname": "Document:messageId",
            "label": "Message ID",
            "type": "string",
            "description": "Message ID of a document; unique in most cases"
          },
          "mimeType": {
            "name": "mimeType",
            "qname": "Document:mimeType",
            "label": "MIME type",
            "type": "mimetype"
          },
          "language": {
            "name": "language",
            "qname": "Document:language",
            "label": "Language",
            "type": "language"
          },
          "translatedLanguage": {
            "name": "translatedLanguage",
            "qname": "Document:translatedLanguage",
            "label": "The language of the translated text",
            "type": "language",
            "hidden": true
          },
          "translatedText": {
            "name": "translatedText",
            "qname": "Document:translatedText",
            "label": "Translated version of the body text",
            "type": "text",
            "hidden": true
          },
          "date": {
            "name": "date",
            "qname": "Document:date",
            "label": "Date",
            "type": "date",
            "description": "If not otherwise specified",
            "matchable": true
          },
          "authoredAt": {
            "name": "authoredAt",
            "qname": "Document:authoredAt",
            "label": "Authored on",
            "type": "date"
          },
          "publishedAt": {
            "name": "publishedAt",
            "qname": "Document:publishedAt",
            "label": "Published on",
            "type": "date"
          },
          "parent": {
            "name": "parent",
            "qname": "Document:parent",
            "label": "Folder",
            "type": "entity",
            "matchable": true,
            "range": "Folder",
            "reverse": "children"
          },
          "ancestors": {
            "name": "ancestors",
            "qname": "Document:ancestors",
            "label": "Ancestors",
            "type": "entity",
            "matchable": true,
            "hidden": true,
            "range": "Folder",
            "reverse": "descendants"
          },
          "processingStatus": {
            "name": "processingStatus",
            "qname": "Document:processingStatus",
            "label": "Processing status",
            "type": "string",
            "hidden": true
          },
          "processingError": {
            "name": "processingError",
            "qname": "Document:processingError",
            "label": "Processing error",
            "type": "string",
            "hidden": true
          },
          "processingAgent": {
            "name": "processingAgent",
            "qname": "Document:processingAgent",
            "label": "Processing agent",
            "type": "string",
            "description": "Name and version of the processing agent used to process the Document"
          },
          "processedAt": {
            "name": "processedAt",
            "qname": "Document:processedAt",
            "label": "Processed at",
            "type": "date",
            "description": "Date and time of the most recent ingestion of the Document",
            "hidden": true
          },
          "proven": {
            "name": "proven",
            "qname": "Document:proven",
            "label": "Derived entities",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Thing",
            "reverse": "proof"
          },
          "mentionedEntities": {
            "name": "mentionedEntities",
            "qname": "Document:mentionedEntities",
            "label": "Extracted names",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "hidden": true,
            "range": "Mention",
            "reverse": "document"
          },
          "relatedEntities": {
            "name": "relatedEntities",
            "qname": "Document:relatedEntities",
            "label": "Related entities",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Documentation",
            "reverse": "document"
          }
        }
      },
      "PublicBody": {
        "label": "Public body",
        "plural": "Public bodies",
        "schemata": ["LegalEntity", "Organization", "PublicBody", "Thing"],
        "extends": ["Organization"],
        "featured": ["name", "country", "legalForm", "status"],
        "required": ["name"],
        "caption": ["name"],
        "description": "A public body, such as a ministry, department or state company.\n",
        "matchable": true,
        "properties": {}
      },
      "Payment": {
        "label": "Payment",
        "plural": "Payments",
        "schemata": ["Interval", "Payment", "Value"],
        "extends": ["Interval", "Value"],
        "edge": {
          "source": "payer",
          "target": "beneficiary",
          "caption": ["amount", "date", "purpose"],
          "label": "paid",
          "directed": true
        },
        "featured": ["payer", "beneficiary", "date", "amount", "purpose"],
        "required": ["payer", "beneficiary"],
        "caption": ["amount"],
        "description": "A monetary payment between two parties.",
        "properties": {
          "sequenceNumber": {
            "name": "sequenceNumber",
            "qname": "Payment:sequenceNumber",
            "label": "Sequence number",
            "type": "string"
          },
          "transactionNumber": {
            "name": "transactionNumber",
            "qname": "Payment:transactionNumber",
            "label": "Transaction number",
            "type": "string"
          },
          "purpose": {
            "name": "purpose",
            "qname": "Payment:purpose",
            "label": "Payment purpose",
            "type": "text"
          },
          "programme": {
            "name": "programme",
            "qname": "Payment:programme",
            "label": "Payment programme",
            "type": "string",
            "description": "Programme name, funding code, category identifier, etc."
          },
          "payer": {
            "name": "payer",
            "qname": "Payment:payer",
            "label": "Payer",
            "type": "entity",
            "matchable": true,
            "range": "LegalEntity",
            "reverse": "paymentPayer"
          },
          "payerAccount": {
            "name": "payerAccount",
            "qname": "Payment:payerAccount",
            "label": "Payer bank account",
            "type": "entity",
            "matchable": true,
            "range": "BankAccount",
            "reverse": "paymentPayerAccount"
          },
          "beneficiary": {
            "name": "beneficiary",
            "qname": "Payment:beneficiary",
            "label": "Beneficiary",
            "type": "entity",
            "matchable": true,
            "range": "LegalEntity",
            "reverse": "paymentBeneficiary"
          },
          "beneficiaryAccount": {
            "name": "beneficiaryAccount",
            "qname": "Payment:beneficiaryAccount",
            "label": "Beneficiary bank account",
            "type": "entity",
            "matchable": true,
            "range": "BankAccount",
            "reverse": "paymentBeneficiaryAccount"
          },
          "contract": {
            "name": "contract",
            "qname": "Payment:contract",
            "label": "Contract",
            "type": "entity",
            "matchable": true,
            "range": "Contract",
            "reverse": "paymentContract"
          },
          "project": {
            "name": "project",
            "qname": "Payment:project",
            "label": "Project",
            "type": "entity",
            "matchable": true,
            "range": "Project",
            "reverse": "payments"
          }
        }
      },
      "Employment": {
        "label": "Employment",
        "plural": "Employments",
        "schemata": ["Employment", "Interest", "Interval"],
        "extends": ["Interest"],
        "edge": {
          "source": "employee",
          "target": "employer",
          "caption": ["role"],
          "label": "works for",
          "directed": true
        },
        "featured": ["employer", "employee", "role", "startDate", "endDate"],
        "required": ["employer", "employee"],
        "caption": ["role"],
        "properties": {
          "employer": {
            "name": "employer",
            "qname": "Employment:employer",
            "label": "Employer",
            "type": "entity",
            "matchable": true,
            "range": "Organization",
            "reverse": "employees"
          },
          "employee": {
            "name": "employee",
            "qname": "Employment:employee",
            "label": "Employee",
            "type": "entity",
            "matchable": true,
            "range": "Person",
            "reverse": "employers"
          }
        }
      },
      "EconomicActivity": {
        "label": "Customs declaration",
        "plural": "Customs declarations",
        "schemata": ["EconomicActivity", "Interval"],
        "extends": ["Interval"],
        "featured": [
          "sender",
          "receiver",
          "contract",
          "goodsDescription",
          "startDate",
          "endDate"
        ],
        "caption": ["summary", "goodsDescription", "ccdNumber"],
        "description": "A foreign economic activity",
        "properties": {
          "contract": {
            "name": "contract",
            "qname": "EconomicActivity:contract",
            "label": "Contract",
            "type": "entity",
            "matchable": true,
            "range": "Contract",
            "reverse": "economicActivityContract"
          },
          "ccdNumber": {
            "name": "ccdNumber",
            "qname": "EconomicActivity:ccdNumber",
            "label": "Customs Cargo Declaration Number",
            "type": "identifier",
            "matchable": true
          },
          "ccdValue": {
            "name": "ccdValue",
            "qname": "EconomicActivity:ccdValue",
            "label": "CCD Value",
            "type": "string",
            "description": "Declaration Value"
          },
          "directionOfTransportation": {
            "name": "directionOfTransportation",
            "qname": "EconomicActivity:directionOfTransportation",
            "label": "Direction of transportation",
            "type": "string",
            "description": "Direction of transportation (import/export)"
          },
          "customsProcedure": {
            "name": "customsProcedure",
            "qname": "EconomicActivity:customsProcedure",
            "label": "Customs Procedure",
            "type": "string",
            "description": "Customs Procedure — type of customs clearance"
          },
          "vedCode": {
            "name": "vedCode",
            "qname": "EconomicActivity:vedCode",
            "label": "FEAC Code",
            "type": "identifier",
            "description": "(Код ТН ВЭД) Foreign Economic Activity Commodity Code",
            "matchable": true
          },
          "vedCodeDescription": {
            "name": "vedCodeDescription",
            "qname": "EconomicActivity:vedCodeDescription",
            "label": "FEAC Code description",
            "type": "string",
            "description": "(Описание кода ТН ВЭД) Foreign Economic Activity Commodity Code description"
          },
          "goodsDescription": {
            "name": "goodsDescription",
            "qname": "EconomicActivity:goodsDescription",
            "label": "Description of goods",
            "type": "text"
          },
          "declarant": {
            "name": "declarant",
            "qname": "EconomicActivity:declarant",
            "label": "Declarant",
            "type": "entity",
            "description": "Customs declarant",
            "matchable": true,
            "range": "LegalEntity",
            "reverse": "economicActivityDeclarant"
          },
          "sender": {
            "name": "sender",
            "qname": "EconomicActivity:sender",
            "label": "Sender",
            "type": "entity",
            "description": "Origin of the goods",
            "matchable": true,
            "range": "LegalEntity",
            "reverse": "economicActivitySender"
          },
          "receiver": {
            "name": "receiver",
            "qname": "EconomicActivity:receiver",
            "label": "Receiver",
            "type": "entity",
            "description": "Destination of the goods",
            "matchable": true,
            "range": "LegalEntity",
            "reverse": "economicActivityReceiver"
          },
          "contractHolder": {
            "name": "contractHolder",
            "qname": "EconomicActivity:contractHolder",
            "label": "Contract holder",
            "type": "entity",
            "description": "Customs formalities caretaker",
            "matchable": true,
            "range": "LegalEntity",
            "reverse": "economicActivityHolder"
          },
          "invoiceAmount": {
            "name": "invoiceAmount",
            "qname": "EconomicActivity:invoiceAmount",
            "label": "Invoice Value Amount",
            "type": "string",
            "description": "Invoice Value of goods"
          },
          "customsAmount": {
            "name": "customsAmount",
            "qname": "EconomicActivity:customsAmount",
            "label": "Customs Value Amount",
            "type": "string",
            "description": "Customs Value of goods"
          },
          "dollarExchRate": {
            "name": "dollarExchRate",
            "qname": "EconomicActivity:dollarExchRate",
            "label": "USD Exchange Rate",
            "type": "string",
            "description": "USD Exchange Rate for the activity"
          },
          "tradingCountry": {
            "name": "tradingCountry",
            "qname": "EconomicActivity:tradingCountry",
            "label": "Trading Country",
            "type": "country",
            "description": "Trading Country of the company which transports the goods via Russian border",
            "matchable": true
          },
          "departureCountry": {
            "name": "departureCountry",
            "qname": "EconomicActivity:departureCountry",
            "label": "Country of departure",
            "type": "country",
            "description": "Country out of which the goods are transported",
            "matchable": true
          },
          "destinationCountry": {
            "name": "destinationCountry",
            "qname": "EconomicActivity:destinationCountry",
            "label": "Country of destination",
            "type": "country",
            "description": "Final destination for the goods",
            "matchable": true
          },
          "originCountry": {
            "name": "originCountry",
            "qname": "EconomicActivity:originCountry",
            "label": "Country of origin",
            "type": "country",
            "description": "Country of origin of goods",
            "matchable": true
          },
          "bankAccount": {
            "name": "bankAccount",
            "qname": "EconomicActivity:bankAccount",
            "label": "Bank Account",
            "type": "entity",
            "description": "Bank account of the contract",
            "matchable": true,
            "range": "BankAccount",
            "reverse": "contractBankAccount"
          },
          "bankRub": {
            "name": "bankRub",
            "qname": "EconomicActivity:bankRub",
            "label": "Rouble bank",
            "type": "entity",
            "description": "Bank account for payments in roubles",
            "matchable": true,
            "range": "BankAccount",
            "reverse": "rubBankAccount"
          },
          "bankForeign": {
            "name": "bankForeign",
            "qname": "EconomicActivity:bankForeign",
            "label": "Foreign currency bank",
            "type": "entity",
            "description": "Bank account for payments in foreign currency",
            "matchable": true,
            "range": "BankAccount",
            "reverse": "foreignBankAccount"
          },
          "transport": {
            "name": "transport",
            "qname": "EconomicActivity:transport",
            "label": "Transport",
            "type": "entity",
            "description": "Means of transportation",
            "matchable": true,
            "range": "Vehicle",
            "reverse": "declaredCustoms"
          }
        }
      },
      "Project": {
        "label": "Project",
        "plural": "Projects",
        "schemata": ["Interval", "Project", "Thing", "Value"],
        "extends": ["Interval", "Thing", "Value"],
        "featured": ["name", "projectId", "startDate"],
        "caption": ["name", "projectId"],
        "description": "An activity carried out by a group of participants.\n",
        "properties": {
          "projectId": {
            "name": "projectId",
            "qname": "Project:projectId",
            "label": "Project ID",
            "type": "identifier",
            "matchable": true
          },
          "status": {
            "name": "status",
            "qname": "Project:status",
            "label": "Status",
            "type": "string"
          },
          "phase": {
            "name": "phase",
            "qname": "Project:phase",
            "label": "Phase",
            "type": "string"
          },
          "goal": {
            "name": "goal",
            "qname": "Project:goal",
            "label": "Project goal",
            "type": "string"
          },
          "contracts": {
            "name": "contracts",
            "qname": "Project:contracts",
            "label": "Contracts",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Contract",
            "reverse": "project"
          },
          "payments": {
            "name": "payments",
            "qname": "Project:payments",
            "label": "Payments",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Payment",
            "reverse": "project"
          },
          "participants": {
            "name": "participants",
            "qname": "Project:participants",
            "label": "Participants",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "ProjectParticipant",
            "reverse": "project"
          }
        }
      },
      "Mention": {
        "label": "Mention",
        "plural": "Mentions",
        "schemata": ["Mention"],
        "extends": [],
        "featured": ["document", "name", "resolved"],
        "required": ["document", "name"],
        "caption": ["name"],
        "hidden": true,
        "generated": true,
        "properties": {
          "document": {
            "name": "document",
            "qname": "Mention:document",
            "label": "Document",
            "type": "entity",
            "matchable": true,
            "range": "Document",
            "reverse": "mentionedEntities"
          },
          "resolved": {
            "name": "resolved",
            "qname": "Mention:resolved",
            "label": "Entity",
            "type": "entity",
            "matchable": true,
            "range": "LegalEntity",
            "reverse": "mentionedBy"
          },
          "name": {
            "name": "name",
            "qname": "Mention:name",
            "label": "Name",
            "type": "name",
            "matchable": true
          },
          "detectedSchema": {
            "name": "detectedSchema",
            "qname": "Mention:detectedSchema",
            "label": "Detected entity type",
            "type": "string",
            "hidden": true
          },
          "contextCountry": {
            "name": "contextCountry",
            "qname": "Mention:contextCountry",
            "label": "Co-occurring countries",
            "type": "country",
            "hidden": true
          },
          "contextPhone": {
            "name": "contextPhone",
            "qname": "Mention:contextPhone",
            "label": "Co-occurring phone numbers",
            "type": "phone",
            "hidden": true
          },
          "contextEmail": {
            "name": "contextEmail",
            "qname": "Mention:contextEmail",
            "label": "Co-occurring e-mail addresses",
            "type": "email",
            "hidden": true
          }
        }
      },
      "Security": {
        "label": "Security",
        "plural": "Securities",
        "schemata": ["Asset", "Security", "Thing", "Value"],
        "extends": ["Asset"],
        "temporalExtent": {
          "start": ["issueDate"],
          "end": ["maturityDate"]
        },
        "featured": ["isin", "name", "issuer", "country"],
        "caption": ["name", "isin", "registrationNumber"],
        "description": "A tradeable financial asset.",
        "matchable": true,
        "properties": {
          "isin": {
            "name": "isin",
            "qname": "Security:isin",
            "label": "ISIN",
            "type": "identifier",
            "description": "International Securities Identification Number",
            "matchable": true
          },
          "registrationNumber": {
            "name": "registrationNumber",
            "qname": "Security:registrationNumber",
            "label": "Registration number",
            "type": "identifier",
            "matchable": true
          },
          "ticker": {
            "name": "ticker",
            "qname": "Security:ticker",
            "label": "Stock ticker symbol",
            "type": "identifier",
            "matchable": true
          },
          "figiCode": {
            "name": "figiCode",
            "qname": "Security:figiCode",
            "label": "Financial Instrument Global Identifier",
            "type": "identifier",
            "matchable": true
          },
          "issuer": {
            "name": "issuer",
            "qname": "Security:issuer",
            "label": "Issuer",
            "type": "entity",
            "matchable": true,
            "range": "LegalEntity",
            "reverse": "securities"
          },
          "issueDate": {
            "name": "issueDate",
            "qname": "Security:issueDate",
            "label": "Date issued",
            "type": "date",
            "matchable": true
          },
          "maturityDate": {
            "name": "maturityDate",
            "qname": "Security:maturityDate",
            "label": "Maturity date",
            "type": "date",
            "matchable": true
          },
          "type": {
            "name": "type",
            "qname": "Security:type",
            "label": "Type",
            "type": "string"
          },
          "classification": {
            "name": "classification",
            "qname": "Security:classification",
            "label": "Classification",
            "type": "string"
          },
          "collateral": {
            "name": "collateral",
            "qname": "Security:collateral",
            "label": "Collateral",
            "type": "string"
          }
        }
      },
      "HyperText": {
        "label": "Web page",
        "plural": "Web pages",
        "schemata": ["Analyzable", "Document", "HyperText", "Thing"],
        "extends": ["Document"],
        "featured": ["title", "fileName", "mimeType", "parent"],
        "caption": ["title", "fileName"],
        "generated": true,
        "properties": {
          "bodyHtml": {
            "name": "bodyHtml",
            "qname": "HyperText:bodyHtml",
            "label": "HTML",
            "type": "html",
            "hidden": true
          }
        }
      },
      "Message": {
        "label": "Message",
        "plural": "Messages",
        "schemata": [
          "Analyzable",
          "Document",
          "Folder",
          "HyperText",
          "Interval",
          "Message",
          "PlainText",
          "Thing"
        ],
        "extends": ["Folder", "HyperText", "Interval", "PlainText"],
        "featured": ["subject", "date", "sender", "recipients"],
        "required": ["bodyText", "sender"],
        "caption": ["subject", "title", "threadTopic", "fileName"],
        "generated": true,
        "properties": {
          "subject": {
            "name": "subject",
            "qname": "Message:subject",
            "label": "Subject",
            "type": "string"
          },
          "threadTopic": {
            "name": "threadTopic",
            "qname": "Message:threadTopic",
            "label": "Thread topic",
            "type": "string"
          },
          "sender": {
            "name": "sender",
            "qname": "Message:sender",
            "label": "Sender",
            "type": "entity",
            "matchable": true,
            "range": "LegalEntity",
            "reverse": "messagesSent"
          },
          "senderAccount": {
            "name": "senderAccount",
            "qname": "Message:senderAccount",
            "label": "Sender Account",
            "type": "entity",
            "matchable": true,
            "range": "UserAccount",
            "reverse": "messagesSent"
          },
          "recipients": {
            "name": "recipients",
            "qname": "Message:recipients",
            "label": "Recipients",
            "type": "entity",
            "matchable": true,
            "range": "LegalEntity",
            "reverse": "messagesReceived"
          },
          "recipientAccount": {
            "name": "recipientAccount",
            "qname": "Message:recipientAccount",
            "label": "Recipient Account",
            "type": "entity",
            "matchable": true,
            "range": "UserAccount",
            "reverse": "messagesReceived"
          },
          "inReplyTo": {
            "name": "inReplyTo",
            "qname": "Message:inReplyTo",
            "label": "In Reply To",
            "type": "string",
            "description": "Message ID of the preceding message in the thread",
            "hidden": true
          },
          "inReplyToMessage": {
            "name": "inReplyToMessage",
            "qname": "Message:inReplyToMessage",
            "label": "Responding to",
            "type": "entity",
            "matchable": true,
            "range": "Message",
            "reverse": "responses"
          },
          "metadata": {
            "name": "metadata",
            "qname": "Message:metadata",
            "label": "Metadata",
            "type": "json",
            "hidden": true
          },
          "responses": {
            "name": "responses",
            "qname": "Message:responses",
            "label": "Responses",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Message",
            "reverse": "inReplyToMessage"
          }
        }
      },
      "CallForTenders": {
        "label": "Call for tenders",
        "plural": "Calls for tenders",
        "schemata": ["CallForTenders", "Interval", "Thing"],
        "extends": ["Interval", "Thing"],
        "featured": ["title", "authority"],
        "required": ["title", "authority"],
        "caption": ["title"],
        "description": "A public appeal issued by an authority, possibly on behalf of another, for buying a specific work, supply or service\n",
        "properties": {
          "callId": {
            "name": "callId",
            "qname": "CallForTenders:callId",
            "label": "CfT unique id",
            "type": "identifier",
            "matchable": true
          },
          "title": {
            "name": "title",
            "qname": "CallForTenders:title",
            "label": "Title",
            "type": "string"
          },
          "authority": {
            "name": "authority",
            "qname": "CallForTenders:authority",
            "label": "Name of contracting authority",
            "type": "entity",
            "matchable": true,
            "range": "LegalEntity",
            "reverse": "callForTenders"
          },
          "authorityReferenceId": {
            "name": "authorityReferenceId",
            "qname": "CallForTenders:authorityReferenceId",
            "label": "Contracting authority reference ID",
            "type": "identifier",
            "matchable": true
          },
          "onBehalfOf": {
            "name": "onBehalfOf",
            "qname": "CallForTenders:onBehalfOf",
            "label": "Published on behalf of",
            "type": "entity",
            "matchable": true,
            "range": "LegalEntity",
            "reverse": "delegatedCallForTenders"
          },
          "publicationDate": {
            "name": "publicationDate",
            "qname": "CallForTenders:publicationDate",
            "label": "Date of publication/invitation",
            "type": "date",
            "matchable": true
          },
          "evaluationMechanism": {
            "name": "evaluationMechanism",
            "qname": "CallForTenders:evaluationMechanism",
            "label": "Evaluation mechanism",
            "type": "string"
          },
          "procurementType": {
            "name": "procurementType",
            "qname": "CallForTenders:procurementType",
            "label": "Procurement type",
            "type": "string"
          },
          "directive": {
            "name": "directive",
            "qname": "CallForTenders:directive",
            "label": "Directive",
            "type": "string"
          },
          "procedure": {
            "name": "procedure",
            "qname": "CallForTenders:procedure",
            "label": "Procedure",
            "type": "string"
          },
          "involvesOutcome": {
            "name": "involvesOutcome",
            "qname": "CallForTenders:involvesOutcome",
            "label": "Call for tenders result",
            "type": "string",
            "description": "The nature of the contractual agreement that will result from this CfT"
          },
          "cpvCode": {
            "name": "cpvCode",
            "qname": "CallForTenders:cpvCode",
            "label": "CPV code",
            "type": "identifier",
            "description": "Common Procurement Vocabulary (CPV)",
            "matchable": true
          },
          "reverseAuctionsIncluded": {
            "name": "reverseAuctionsIncluded",
            "qname": "CallForTenders:reverseAuctionsIncluded",
            "label": "Inclusion of e-Auctions",
            "type": "string"
          },
          "nutsCode": {
            "name": "nutsCode",
            "qname": "CallForTenders:nutsCode",
            "label": "NUTS code",
            "type": "identifier",
            "description": "Nomenclature of Territorial Units for Statistics (NUTS)",
            "matchable": true
          },
          "relationToThreshold": {
            "name": "relationToThreshold",
            "qname": "CallForTenders:relationToThreshold",
            "label": "Above or below threshold",
            "type": "string"
          },
          "paymentOptions": {
            "name": "paymentOptions",
            "qname": "CallForTenders:paymentOptions",
            "label": "Payment options",
            "type": "string"
          },
          "submissionDeadline": {
            "name": "submissionDeadline",
            "qname": "CallForTenders:submissionDeadline",
            "label": "Submission deadline",
            "type": "date",
            "matchable": true
          },
          "clarificationDeadline": {
            "name": "clarificationDeadline",
            "qname": "CallForTenders:clarificationDeadline",
            "label": "End of clarification period",
            "type": "date",
            "matchable": true
          },
          "awardedInLots": {
            "name": "awardedInLots",
            "qname": "CallForTenders:awardedInLots",
            "label": "Contract awarded in Lots",
            "type": "string"
          },
          "numberOfLots": {
            "name": "numberOfLots",
            "qname": "CallForTenders:numberOfLots",
            "label": "Number of lots",
            "type": "number"
          },
          "lotsNames": {
            "name": "lotsNames",
            "qname": "CallForTenders:lotsNames",
            "label": "Lots names",
            "type": "string"
          },
          "tendersForLots": {
            "name": "tendersForLots",
            "qname": "CallForTenders:tendersForLots",
            "label": "Tenders for lots",
            "type": "string"
          },
          "maximumNumberOfLots": {
            "name": "maximumNumberOfLots",
            "qname": "CallForTenders:maximumNumberOfLots",
            "label": "Maximum number of lots",
            "type": "number"
          },
          "euFunding": {
            "name": "euFunding",
            "qname": "CallForTenders:euFunding",
            "label": "EU funding",
            "type": "string"
          },
          "multipleTenders": {
            "name": "multipleTenders",
            "qname": "CallForTenders:multipleTenders",
            "label": "Multiple tenders will be accepted",
            "type": "string"
          },
          "tedUrl": {
            "name": "tedUrl",
            "qname": "CallForTenders:tedUrl",
            "label": "TED link for published notices",
            "type": "url",
            "matchable": true
          },
          "fallsUnderGPPScope": {
            "name": "fallsUnderGPPScope",
            "qname": "CallForTenders:fallsUnderGPPScope",
            "label": "Does this call fall under the scope of GPP?",
            "type": "string",
            "description": "European Green Public Procurement (GPP) or green purchasing."
          },
          "certificationCheck": {
            "name": "certificationCheck",
            "qname": "CallForTenders:certificationCheck",
            "label": "Certification check",
            "type": "string"
          },
          "awardingDate": {
            "name": "awardingDate",
            "qname": "CallForTenders:awardingDate",
            "label": "Date of awarding",
            "type": "date",
            "matchable": true
          },
          "contractNoticeDate": {
            "name": "contractNoticeDate",
            "qname": "CallForTenders:contractNoticeDate",
            "label": "Contract notice date",
            "type": "date",
            "matchable": true
          },
          "awardNoticeDate": {
            "name": "awardNoticeDate",
            "qname": "CallForTenders:awardNoticeDate",
            "label": "Award Notice Date",
            "type": "date",
            "matchable": true
          },
          "tenderers": {
            "name": "tenderers",
            "qname": "CallForTenders:tenderers",
            "label": "Tenderers",
            "type": "entity",
            "matchable": true,
            "range": "LegalEntity",
            "reverse": "callForTenders"
          },
          "contractAwards": {
            "name": "contractAwards",
            "qname": "CallForTenders:contractAwards",
            "label": "Contract Awards",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "ContractAward",
            "reverse": "callForTenders"
          }
        }
      },
      "Post": {
        "label": "Post",
        "plural": "Posts",
        "schemata": ["Interest", "Interval", "Post"],
        "extends": ["Interest"],
        "featured": ["holder", "organization", "role", "startDate", "endDate"],
        "required": ["holder"],
        "caption": ["summary", "organization", "role"],
        "description": "A post, role or position held by an individual within an organization  or body. This describes the period for which the position is held, not the abstract concept of the post.\n",
        "deprecated": true,
        "properties": {
          "holder": {
            "name": "holder",
            "qname": "Post:holder",
            "label": "Holder",
            "type": "entity",
            "matchable": true,
            "range": "Person",
            "reverse": "posts"
          },
          "organization": {
            "name": "organization",
            "qname": "Post:organization",
            "label": "Organization",
            "type": "string"
          },
          "wikidataId": {
            "name": "wikidataId",
            "qname": "Post:wikidataId",
            "label": "Wikidata ID",
            "type": "identifier",
            "matchable": true,
            "hidden": true
          }
        }
      },
      "Directorship": {
        "label": "Directorship",
        "plural": "Directorships",
        "schemata": ["Directorship", "Interest", "Interval"],
        "extends": ["Interest"],
        "edge": {
          "source": "director",
          "target": "organization",
          "caption": ["role"],
          "label": "directs",
          "directed": true
        },
        "featured": [
          "director",
          "organization",
          "role",
          "startDate",
          "endDate"
        ],
        "required": ["director", "organization"],
        "caption": ["role"],
        "properties": {
          "director": {
            "name": "director",
            "qname": "Directorship:director",
            "label": "Director",
            "type": "entity",
            "matchable": true,
            "range": "LegalEntity",
            "reverse": "directorshipDirector"
          },
          "organization": {
            "name": "organization",
            "qname": "Directorship:organization",
            "label": "Organization",
            "type": "entity",
            "matchable": true,
            "range": "Organization",
            "reverse": "directorshipOrganization"
          },
          "secretary": {
            "name": "secretary",
            "qname": "Directorship:secretary",
            "label": "Secretary",
            "type": "string"
          }
        }
      },
      "Vehicle": {
        "label": "Vehicle",
        "plural": "Vehicles",
        "schemata": ["Asset", "Thing", "Value", "Vehicle"],
        "extends": ["Asset"],
        "temporalExtent": {
          "start": ["buildDate", "registrationDate"],
          "end": ["deregistrationDate"]
        },
        "featured": ["type", "name", "registrationNumber", "country", "owner"],
        "caption": ["name", "registrationNumber"],
        "properties": {
          "registrationNumber": {
            "name": "registrationNumber",
            "qname": "Vehicle:registrationNumber",
            "label": "Registration number",
            "type": "identifier",
            "matchable": true
          },
          "type": {
            "name": "type",
            "qname": "Vehicle:type",
            "label": "Type",
            "type": "string"
          },
          "model": {
            "name": "model",
            "qname": "Vehicle:model",
            "label": "Model",
            "type": "string"
          },
          "owner": {
            "name": "owner",
            "qname": "Vehicle:owner",
            "label": "Owner",
            "type": "entity",
            "matchable": true,
            "range": "LegalEntity",
            "reverse": "ownedVehicles"
          },
          "operator": {
            "name": "operator",
            "qname": "Vehicle:operator",
            "label": "Operator",
            "type": "entity",
            "matchable": true,
            "range": "LegalEntity",
            "reverse": "operatedVehicles"
          },
          "buildDate": {
            "name": "buildDate",
            "qname": "Vehicle:buildDate",
            "label": "Build Date",
            "type": "date",
            "matchable": true
          },
          "registrationDate": {
            "name": "registrationDate",
            "qname": "Vehicle:registrationDate",
            "label": "Registration Date",
            "type": "date",
            "matchable": true
          },
          "deregistrationDate": {
            "name": "deregistrationDate",
            "qname": "Vehicle:deregistrationDate",
            "label": "De-registration Date",
            "type": "date",
            "matchable": true
          },
          "declaredCustoms": {
            "name": "declaredCustoms",
            "qname": "Vehicle:declaredCustoms",
            "label": "Customs declarations",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "EconomicActivity",
            "reverse": "transport"
          },
          "tripsInvolved": {
            "name": "tripsInvolved",
            "qname": "Vehicle:tripsInvolved",
            "label": "Trips",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Trip",
            "reverse": "vehicle"
          }
        }
      },
      "PlainText": {
        "label": "Text file",
        "plural": "Text files",
        "schemata": ["Analyzable", "Document", "PlainText", "Thing"],
        "extends": ["Document"],
        "featured": ["title", "fileName", "mimeType", "parent"],
        "caption": ["fileName", "title"],
        "description": "Text files, like .txt or source code.\n",
        "generated": true,
        "properties": {}
      },
      "Asset": {
        "label": "Asset",
        "plural": "Assets",
        "schemata": ["Asset", "Thing", "Value"],
        "extends": ["Thing", "Value"],
        "featured": ["name", "amount"],
        "caption": ["name"],
        "description": "A piece of property which can be owned and assigned a monetary value.\n",
        "properties": {
          "ownershipAsset": {
            "name": "ownershipAsset",
            "qname": "Asset:ownershipAsset",
            "label": "Owners",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Ownership",
            "reverse": "asset"
          }
        }
      },
      "Workbook": {
        "label": "Workbook",
        "plural": "Workbooks",
        "schemata": ["Analyzable", "Document", "Folder", "Thing", "Workbook"],
        "extends": ["Folder"],
        "featured": ["title", "fileName", "parent"],
        "caption": ["fileName", "title"],
        "description": "A spreadsheet document, for example from Excel. Each spreadsheet contains a set of sheets that hold actual data.\n",
        "generated": true,
        "properties": {}
      },
      "License": {
        "label": "License",
        "plural": "Licenses",
        "schemata": ["Asset", "Contract", "License", "Thing", "Value"],
        "extends": ["Contract"],
        "featured": [
          "name",
          "amount",
          "authority",
          "contractDate",
          "commodities"
        ],
        "required": ["name", "authority"],
        "caption": ["name"],
        "description": "A grant of land, rights or property. A type of Contract",
        "properties": {
          "area": {
            "name": "area",
            "qname": "License:area",
            "label": "Area",
            "type": "string"
          },
          "commodities": {
            "name": "commodities",
            "qname": "License:commodities",
            "label": "Commodities",
            "type": "string"
          },
          "reviewDate": {
            "name": "reviewDate",
            "qname": "License:reviewDate",
            "label": "License review date",
            "type": "string"
          }
        }
      },
      "Analyzable": {
        "label": "Analyzable",
        "plural": "Analyzables",
        "schemata": ["Analyzable"],
        "extends": [],
        "description": "An entity suitable for being processed via named-entity recognition.\n",
        "abstract": true,
        "generated": true,
        "properties": {
          "detectedLanguage": {
            "name": "detectedLanguage",
            "qname": "Analyzable:detectedLanguage",
            "label": "Detected language",
            "type": "language",
            "hidden": true
          },
          "detectedCountry": {
            "name": "detectedCountry",
            "qname": "Analyzable:detectedCountry",
            "label": "Detected country",
            "type": "country",
            "hidden": true
          },
          "namesMentioned": {
            "name": "namesMentioned",
            "qname": "Analyzable:namesMentioned",
            "label": "Detected names",
            "type": "name",
            "matchable": true,
            "hidden": true
          },
          "peopleMentioned": {
            "name": "peopleMentioned",
            "qname": "Analyzable:peopleMentioned",
            "label": "Detected people",
            "type": "name",
            "matchable": true,
            "hidden": true
          },
          "companiesMentioned": {
            "name": "companiesMentioned",
            "qname": "Analyzable:companiesMentioned",
            "label": "Detected companies",
            "type": "name",
            "matchable": true,
            "hidden": true
          },
          "ibanMentioned": {
            "name": "ibanMentioned",
            "qname": "Analyzable:ibanMentioned",
            "label": "Detected IBANs",
            "type": "iban",
            "matchable": true,
            "hidden": true
          },
          "ipMentioned": {
            "name": "ipMentioned",
            "qname": "Analyzable:ipMentioned",
            "label": "Detected IP addresses",
            "type": "ip",
            "matchable": true,
            "hidden": true
          },
          "locationMentioned": {
            "name": "locationMentioned",
            "qname": "Analyzable:locationMentioned",
            "label": "Detected locations",
            "type": "address",
            "hidden": true
          },
          "phoneMentioned": {
            "name": "phoneMentioned",
            "qname": "Analyzable:phoneMentioned",
            "label": "Detected phones",
            "type": "phone",
            "matchable": true,
            "hidden": true
          },
          "emailMentioned": {
            "name": "emailMentioned",
            "qname": "Analyzable:emailMentioned",
            "label": "Detected e-mail addresses",
            "type": "email",
            "matchable": true,
            "hidden": true
          }
        }
      },
      "Similar": {
        "label": "Similar",
        "plural": "Similar entities",
        "schemata": ["Similar"],
        "extends": [],
        "featured": ["candidate", "match", "confidenceScore"],
        "caption": ["confidenceScore", "criteria"],
        "description": "A link between two entities that are presumed to be the same, e.g. as the outcome of a probabilistic record linkage process.\n",
        "generated": true,
        "properties": {
          "candidate": {
            "name": "candidate",
            "qname": "Similar:candidate",
            "label": "Candidate",
            "type": "entity",
            "matchable": true,
            "range": "Thing",
            "reverse": "candidateSimilars"
          },
          "match": {
            "name": "match",
            "qname": "Similar:match",
            "label": "Match",
            "type": "entity",
            "matchable": true,
            "range": "Thing",
            "reverse": "matchSimilars"
          },
          "confidenceScore": {
            "name": "confidenceScore",
            "qname": "Similar:confidenceScore",
            "label": "Confidence score",
            "type": "number"
          },
          "criteria": {
            "name": "criteria",
            "qname": "Similar:criteria",
            "label": "Matching criteria",
            "type": "string"
          },
          "matcher": {
            "name": "matcher",
            "qname": "Similar:matcher",
            "label": "Matcher",
            "type": "string"
          }
        }
      },
      "TaxRoll": {
        "label": "Tax roll",
        "plural": "Tax rolls",
        "schemata": ["Interval", "TaxRoll"],
        "extends": ["Interval"],
        "featured": ["taxee", "date", "income", "wealth", "taxPaid"],
        "required": ["taxee"],
        "description": "A tax declaration of an individual",
        "properties": {
          "taxee": {
            "name": "taxee",
            "qname": "TaxRoll:taxee",
            "label": "Taxee",
            "type": "entity",
            "matchable": true,
            "range": "LegalEntity",
            "reverse": "taxRolls"
          },
          "country": {
            "name": "country",
            "qname": "TaxRoll:country",
            "label": "Country",
            "type": "country",
            "matchable": true
          },
          "surname": {
            "name": "surname",
            "qname": "TaxRoll:surname",
            "label": "Surname",
            "type": "string"
          },
          "givenName": {
            "name": "givenName",
            "qname": "TaxRoll:givenName",
            "label": "Given name",
            "type": "string"
          },
          "birthDate": {
            "name": "birthDate",
            "qname": "TaxRoll:birthDate",
            "label": "Birth date",
            "type": "date",
            "matchable": true
          },
          "income": {
            "name": "income",
            "qname": "TaxRoll:income",
            "label": "Registered income",
            "type": "string"
          },
          "taxPaid": {
            "name": "taxPaid",
            "qname": "TaxRoll:taxPaid",
            "label": "Amount of tax paid",
            "type": "string"
          },
          "wealth": {
            "name": "wealth",
            "qname": "TaxRoll:wealth",
            "label": "Registered wealth",
            "type": "string"
          }
        }
      },
      "Ownership": {
        "label": "Ownership",
        "plural": "Ownerships",
        "schemata": ["Interest", "Interval", "Ownership"],
        "extends": ["Interest"],
        "edge": {
          "source": "owner",
          "target": "asset",
          "caption": ["percentage"],
          "label": "owns",
          "directed": true
        },
        "featured": ["owner", "asset", "percentage", "startDate", "endDate"],
        "required": ["owner", "asset"],
        "properties": {
          "owner": {
            "name": "owner",
            "qname": "Ownership:owner",
            "label": "Owner",
            "type": "entity",
            "matchable": true,
            "range": "LegalEntity",
            "reverse": "ownershipOwner"
          },
          "asset": {
            "name": "asset",
            "qname": "Ownership:asset",
            "label": "Asset",
            "type": "entity",
            "matchable": true,
            "range": "Asset",
            "reverse": "ownershipAsset"
          },
          "percentage": {
            "name": "percentage",
            "qname": "Ownership:percentage",
            "label": "Percentage held",
            "type": "string"
          },
          "sharesCount": {
            "name": "sharesCount",
            "qname": "Ownership:sharesCount",
            "label": "Number of shares",
            "type": "string"
          },
          "sharesValue": {
            "name": "sharesValue",
            "qname": "Ownership:sharesValue",
            "label": "Value of shares",
            "type": "string"
          },
          "sharesCurrency": {
            "name": "sharesCurrency",
            "qname": "Ownership:sharesCurrency",
            "label": "Currency of shares",
            "type": "string"
          },
          "sharesType": {
            "name": "sharesType",
            "qname": "Ownership:sharesType",
            "label": "Type of shares",
            "type": "string"
          },
          "legalBasis": {
            "name": "legalBasis",
            "qname": "Ownership:legalBasis",
            "label": "Legal basis",
            "type": "string"
          },
          "ownershipType": {
            "name": "ownershipType",
            "qname": "Ownership:ownershipType",
            "label": "Type of ownership",
            "type": "string"
          }
        }
      },
      "Page": {
        "label": "Page",
        "plural": "Pages",
        "schemata": ["Page"],
        "extends": [],
        "hidden": true,
        "generated": true,
        "properties": {
          "index": {
            "name": "index",
            "qname": "Page:index",
            "label": "Index",
            "type": "number"
          },
          "bodyText": {
            "name": "bodyText",
            "qname": "Page:bodyText",
            "label": "Text",
            "type": "text",
            "hidden": true
          },
          "document": {
            "name": "document",
            "qname": "Page:document",
            "label": "Document",
            "type": "entity",
            "matchable": true,
            "range": "Pages",
            "reverse": "pages"
          },
          "detectedLanguage": {
            "name": "detectedLanguage",
            "qname": "Page:detectedLanguage",
            "label": "Detected language",
            "type": "language",
            "hidden": true
          },
          "translatedText": {
            "name": "translatedText",
            "qname": "Page:translatedText",
            "label": "Translated version of the body text",
            "type": "text",
            "hidden": true
          },
          "translatedTextLanguage": {
            "name": "translatedTextLanguage",
            "qname": "Page:translatedTextLanguage",
            "label": "The language of the translated text",
            "type": "string",
            "hidden": true
          },
          "indexText": {
            "name": "indexText",
            "qname": "Page:indexText",
            "label": "Index text",
            "type": "text",
            "hidden": true
          }
        }
      },
      "Trip": {
        "label": "Trip",
        "plural": "Trips",
        "schemata": ["Analyzable", "Event", "Interval", "Thing", "Trip"],
        "extends": ["Event"],
        "featured": [
          "endLocation",
          "startLocation",
          "vehicle",
          "startDate",
          "endDate"
        ],
        "required": ["name", "endLocation", "startLocation"],
        "caption": ["name", "startDate", "endDate"],
        "properties": {
          "startLocation": {
            "name": "startLocation",
            "qname": "Trip:startLocation",
            "label": "Start location",
            "type": "entity",
            "matchable": true,
            "range": "Address",
            "reverse": "tripsDeparting"
          },
          "endLocation": {
            "name": "endLocation",
            "qname": "Trip:endLocation",
            "label": "End location",
            "type": "entity",
            "matchable": true,
            "range": "Address",
            "reverse": "tripsIncoming"
          },
          "vehicle": {
            "name": "vehicle",
            "qname": "Trip:vehicle",
            "label": "Vehicle",
            "type": "entity",
            "matchable": true,
            "range": "Vehicle",
            "reverse": "tripsInvolved"
          }
        }
      },
      "Interest": {
        "label": "Interest",
        "plural": "Interest",
        "schemata": ["Interest", "Interval"],
        "extends": ["Interval"],
        "abstract": true,
        "properties": {
          "role": {
            "name": "role",
            "qname": "Interest:role",
            "label": "Role",
            "type": "string"
          },
          "status": {
            "name": "status",
            "qname": "Interest:status",
            "label": "Status",
            "type": "string"
          }
        }
      },
      "Package": {
        "label": "Package",
        "plural": "Packages",
        "schemata": ["Analyzable", "Document", "Folder", "Package", "Thing"],
        "extends": ["Folder"],
        "featured": ["title", "fileName", "mimeType", "parent"],
        "caption": ["fileName", "title"],
        "description": "A bundle of files that have been packaged together into some form of archive.\n",
        "generated": true,
        "properties": {}
      },
      "LegalEntity": {
        "label": "Legal entity",
        "plural": "Legal entities",
        "schemata": ["LegalEntity", "Thing"],
        "extends": ["Thing"],
        "temporalExtent": {
          "start": ["incorporationDate"],
          "end": ["dissolutionDate"]
        },
        "featured": ["name", "country", "legalForm", "status"],
        "required": ["name"],
        "caption": ["name", "email", "phone", "registrationNumber"],
        "description": "Any party to legal proceedings, such as asset ownership, corporate governance or social interactions. Often used when raw data does not specify if something is a person or company.\n",
        "matchable": true,
        "properties": {
          "email": {
            "name": "email",
            "qname": "LegalEntity:email",
            "label": "E-Mail",
            "type": "email",
            "description": "Email address",
            "matchable": true
          },
          "phone": {
            "name": "phone",
            "qname": "LegalEntity:phone",
            "label": "Phone",
            "type": "phone",
            "description": "Phone number",
            "matchable": true
          },
          "website": {
            "name": "website",
            "qname": "LegalEntity:website",
            "label": "Website",
            "type": "url",
            "description": "Website address",
            "matchable": true
          },
          "legalForm": {
            "name": "legalForm",
            "qname": "LegalEntity:legalForm",
            "label": "Legal form",
            "type": "string"
          },
          "incorporationDate": {
            "name": "incorporationDate",
            "qname": "LegalEntity:incorporationDate",
            "label": "Incorporation date",
            "type": "date",
            "description": "The date the legal entity was incorporated",
            "matchable": true
          },
          "dissolutionDate": {
            "name": "dissolutionDate",
            "qname": "LegalEntity:dissolutionDate",
            "label": "Dissolution date",
            "type": "date",
            "description": "The date the legal entity was dissolved, if applicable",
            "matchable": true
          },
          "taxStatus": {
            "name": "taxStatus",
            "qname": "LegalEntity:taxStatus",
            "label": "Tax status",
            "type": "string"
          },
          "status": {
            "name": "status",
            "qname": "LegalEntity:status",
            "label": "Status",
            "type": "string"
          },
          "sector": {
            "name": "sector",
            "qname": "LegalEntity:sector",
            "label": "Sector",
            "type": "string"
          },
          "classification": {
            "name": "classification",
            "qname": "LegalEntity:classification",
            "label": "Classification",
            "type": "string"
          },
          "registrationNumber": {
            "name": "registrationNumber",
            "qname": "LegalEntity:registrationNumber",
            "label": "Registration number",
            "type": "identifier",
            "description": "Company registration number",
            "matchable": true
          },
          "idNumber": {
            "name": "idNumber",
            "qname": "LegalEntity:idNumber",
            "label": "ID Number",
            "type": "identifier",
            "description": "ID number of any applicable ID",
            "matchable": true
          },
          "taxNumber": {
            "name": "taxNumber",
            "qname": "LegalEntity:taxNumber",
            "label": "Tax Number",
            "type": "identifier",
            "description": "Tax identification number",
            "matchable": true
          },
          "vatCode": {
            "name": "vatCode",
            "qname": "LegalEntity:vatCode",
            "label": "V.A.T. Identifier",
            "type": "identifier",
            "description": "(EU) VAT number",
            "matchable": true
          },
          "jurisdiction": {
            "name": "jurisdiction",
            "qname": "LegalEntity:jurisdiction",
            "label": "Jurisdiction",
            "type": "country",
            "description": "Country or region in which this entity operates",
            "matchable": true
          },
          "mainCountry": {
            "name": "mainCountry",
            "qname": "LegalEntity:mainCountry",
            "label": "Country of origin",
            "type": "country",
            "description": "Primary country of this entity",
            "matchable": true
          },
          "opencorporatesUrl": {
            "name": "opencorporatesUrl",
            "qname": "LegalEntity:opencorporatesUrl",
            "label": "OpenCorporates URL",
            "type": "url",
            "matchable": true
          },
          "bvdId": {
            "name": "bvdId",
            "qname": "LegalEntity:bvdId",
            "label": "Bureau van Dijk ID",
            "type": "identifier",
            "matchable": true
          },
          "icijId": {
            "name": "icijId",
            "qname": "LegalEntity:icijId",
            "label": "ICIJ ID",
            "type": "string",
            "description": "ID according to International Consortium for Investigative Journalists"
          },
          "okpoCode": {
            "name": "okpoCode",
            "qname": "LegalEntity:okpoCode",
            "label": "OKPO",
            "type": "identifier",
            "description": "Russian industry classifier"
          },
          "innCode": {
            "name": "innCode",
            "qname": "LegalEntity:innCode",
            "label": "INN",
            "type": "identifier",
            "description": "Russian company ID",
            "matchable": true
          },
          "ogrnCode": {
            "name": "ogrnCode",
            "qname": "LegalEntity:ogrnCode",
            "label": "OGRN",
            "type": "identifier",
            "description": "Major State Registration Number",
            "matchable": true
          },
          "leiCode": {
            "name": "leiCode",
            "qname": "LegalEntity:leiCode",
            "label": "LEI",
            "type": "identifier",
            "description": "Legal Entity Identifier",
            "matchable": true
          },
          "dunsCode": {
            "name": "dunsCode",
            "qname": "LegalEntity:dunsCode",
            "label": "D-U-N-S",
            "type": "identifier",
            "description": "Dun & Bradstreet identifier",
            "matchable": true
          },
          "swiftBic": {
            "name": "swiftBic",
            "qname": "LegalEntity:swiftBic",
            "label": "SWIFT/BIC",
            "type": "identifier",
            "description": "Bank identifier code",
            "matchable": true
          },
          "parent": {
            "name": "parent",
            "qname": "LegalEntity:parent",
            "label": "Parent company",
            "type": "entity",
            "description": "If this entity is a subsidiary, another entity (company or organisation) is its parent",
            "matchable": true,
            "range": "LegalEntity",
            "reverse": "subsidiaries"
          },
          "contractAuthority": {
            "name": "contractAuthority",
            "qname": "LegalEntity:contractAuthority",
            "label": "Contracts issued",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Contract",
            "reverse": "authority"
          },
          "emailsSent": {
            "name": "emailsSent",
            "qname": "LegalEntity:emailsSent",
            "label": "E-Mails sent",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Email",
            "reverse": "emitters"
          },
          "emailsReceived": {
            "name": "emailsReceived",
            "qname": "LegalEntity:emailsReceived",
            "label": "E-Mails received",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Email",
            "reverse": "recipients"
          },
          "cryptoWallets": {
            "name": "cryptoWallets",
            "qname": "LegalEntity:cryptoWallets",
            "label": "Cryptocurrency wallets",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "CryptoWallet",
            "reverse": "holder"
          },
          "subsidiaries": {
            "name": "subsidiaries",
            "qname": "LegalEntity:subsidiaries",
            "label": "Subsidiaries",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "LegalEntity",
            "reverse": "parent"
          },
          "paymentPayer": {
            "name": "paymentPayer",
            "qname": "LegalEntity:paymentPayer",
            "label": "Payments made",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Payment",
            "reverse": "payer"
          },
          "paymentBeneficiary": {
            "name": "paymentBeneficiary",
            "qname": "LegalEntity:paymentBeneficiary",
            "label": "Payments received",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Payment",
            "reverse": "beneficiary"
          },
          "economicActivityDeclarant": {
            "name": "economicActivityDeclarant",
            "qname": "LegalEntity:economicActivityDeclarant",
            "label": "Customs declarations",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "EconomicActivity",
            "reverse": "declarant"
          },
          "economicActivitySender": {
            "name": "economicActivitySender",
            "qname": "LegalEntity:economicActivitySender",
            "label": "Goods originated",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "EconomicActivity",
            "reverse": "sender"
          },
          "economicActivityReceiver": {
            "name": "economicActivityReceiver",
            "qname": "LegalEntity:economicActivityReceiver",
            "label": "Goods received",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "EconomicActivity",
            "reverse": "receiver"
          },
          "economicActivityHolder": {
            "name": "economicActivityHolder",
            "qname": "LegalEntity:economicActivityHolder",
            "label": "Customs declarations facilitated",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "EconomicActivity",
            "reverse": "contractHolder"
          },
          "mentionedBy": {
            "name": "mentionedBy",
            "qname": "LegalEntity:mentionedBy",
            "label": "Document mentions",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Mention",
            "reverse": "resolved"
          },
          "securities": {
            "name": "securities",
            "qname": "LegalEntity:securities",
            "label": "Issued securities",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Security",
            "reverse": "issuer"
          },
          "messagesSent": {
            "name": "messagesSent",
            "qname": "LegalEntity:messagesSent",
            "label": "Messages sent",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Message",
            "reverse": "sender"
          },
          "messagesReceived": {
            "name": "messagesReceived",
            "qname": "LegalEntity:messagesReceived",
            "label": "Messages received",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Message",
            "reverse": "recipients"
          },
          "callForTenders": {
            "name": "callForTenders",
            "qname": "LegalEntity:callForTenders",
            "label": "Call For Tenders",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "CallForTenders",
            "reverse": "authority"
          },
          "delegatedCallForTenders": {
            "name": "delegatedCallForTenders",
            "qname": "LegalEntity:delegatedCallForTenders",
            "label": "Delegated call for tenders",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "CallForTenders",
            "reverse": "onBehalfOf"
          },
          "directorshipDirector": {
            "name": "directorshipDirector",
            "qname": "LegalEntity:directorshipDirector",
            "label": "Directorships",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Directorship",
            "reverse": "director"
          },
          "ownedVehicles": {
            "name": "ownedVehicles",
            "qname": "LegalEntity:ownedVehicles",
            "label": "Vehicles owned",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Vehicle",
            "reverse": "owner"
          },
          "operatedVehicles": {
            "name": "operatedVehicles",
            "qname": "LegalEntity:operatedVehicles",
            "label": "Vehicles operated",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Vehicle",
            "reverse": "operator"
          },
          "taxRolls": {
            "name": "taxRolls",
            "qname": "LegalEntity:taxRolls",
            "label": "Tax rolls",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "TaxRoll",
            "reverse": "taxee"
          },
          "ownershipOwner": {
            "name": "ownershipOwner",
            "qname": "LegalEntity:ownershipOwner",
            "label": "Assets and shares",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Ownership",
            "reverse": "owner"
          },
          "eventsOrganized": {
            "name": "eventsOrganized",
            "qname": "LegalEntity:eventsOrganized",
            "label": "Organized events",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Event",
            "reverse": "organizer"
          },
          "eventsInvolved": {
            "name": "eventsInvolved",
            "qname": "LegalEntity:eventsInvolved",
            "label": "Events",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Event",
            "reverse": "involved"
          },
          "contractAwardSupplier": {
            "name": "contractAwardSupplier",
            "qname": "LegalEntity:contractAwardSupplier",
            "label": "Contracts awarded",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "ContractAward",
            "reverse": "supplier"
          },
          "debtDebtor": {
            "name": "debtDebtor",
            "qname": "LegalEntity:debtDebtor",
            "label": "Debts",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Debt",
            "reverse": "debtor"
          },
          "debtCreditor": {
            "name": "debtCreditor",
            "qname": "LegalEntity:debtCreditor",
            "label": "Credits",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Debt",
            "reverse": "creditor"
          },
          "callsMade": {
            "name": "callsMade",
            "qname": "LegalEntity:callsMade",
            "label": "Calls made",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Call",
            "reverse": "caller"
          },
          "callsReceived": {
            "name": "callsReceived",
            "qname": "LegalEntity:callsReceived",
            "label": "Calls received",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Call",
            "reverse": "receiver"
          },
          "identification": {
            "name": "identification",
            "qname": "LegalEntity:identification",
            "label": "Identifications",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Identification",
            "reverse": "holder"
          },
          "membershipMember": {
            "name": "membershipMember",
            "qname": "LegalEntity:membershipMember",
            "label": "Memberships",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Membership",
            "reverse": "member"
          },
          "projectParticipation": {
            "name": "projectParticipation",
            "qname": "LegalEntity:projectParticipation",
            "label": "Projects",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "ProjectParticipant",
            "reverse": "participant"
          },
          "authoredAssessments": {
            "name": "authoredAssessments",
            "qname": "LegalEntity:authoredAssessments",
            "label": "Assessments authored",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Assessment",
            "reverse": "author"
          },
          "userAccounts": {
            "name": "userAccounts",
            "qname": "LegalEntity:userAccounts",
            "label": "User accounts",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "UserAccount",
            "reverse": "owner"
          },
          "successors": {
            "name": "successors",
            "qname": "LegalEntity:successors",
            "label": "Successors",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Succession",
            "reverse": "predecessor"
          },
          "predecessors": {
            "name": "predecessors",
            "qname": "LegalEntity:predecessors",
            "label": "Predecessors",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Succession",
            "reverse": "successor"
          },
          "agencyClient": {
            "name": "agencyClient",
            "qname": "LegalEntity:agencyClient",
            "label": "Clients",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Representation",
            "reverse": "agent"
          },
          "agentRepresentation": {
            "name": "agentRepresentation",
            "qname": "LegalEntity:agentRepresentation",
            "label": "Agents",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Representation",
            "reverse": "client"
          }
        }
      },
      "ContractAward": {
        "label": "Contract award",
        "plural": "Contract awards",
        "schemata": ["ContractAward", "Interest", "Interval", "Value"],
        "extends": ["Interest", "Value"],
        "edge": {
          "source": "contract",
          "target": "supplier",
          "caption": ["lotNumber"],
          "label": "awarded to",
          "directed": true
        },
        "featured": [
          "supplier",
          "contract",
          "amount",
          "lotNumber",
          "decisionReason"
        ],
        "required": ["supplier", "contract"],
        "description": "A contract or contract lot as awarded to a supplier.",
        "properties": {
          "supplier": {
            "name": "supplier",
            "qname": "ContractAward:supplier",
            "label": "Supplier",
            "type": "entity",
            "description": "The entity the contract was awarded to",
            "matchable": true,
            "range": "LegalEntity",
            "reverse": "contractAwardSupplier"
          },
          "contract": {
            "name": "contract",
            "qname": "ContractAward:contract",
            "label": "Contract",
            "type": "entity",
            "matchable": true,
            "range": "Contract",
            "reverse": "awards"
          },
          "callForTenders": {
            "name": "callForTenders",
            "qname": "ContractAward:callForTenders",
            "label": "Call For Tenders",
            "type": "entity",
            "matchable": true,
            "range": "CallForTenders",
            "reverse": "contractAwards"
          },
          "lotNumber": {
            "name": "lotNumber",
            "qname": "ContractAward:lotNumber",
            "label": "Lot number",
            "type": "string"
          },
          "documentNumber": {
            "name": "documentNumber",
            "qname": "ContractAward:documentNumber",
            "label": "Document number",
            "type": "string"
          },
          "documentType": {
            "name": "documentType",
            "qname": "ContractAward:documentType",
            "label": "Document type",
            "type": "string"
          },
          "decisionReason": {
            "name": "decisionReason",
            "qname": "ContractAward:decisionReason",
            "label": "Decision reason",
            "type": "text"
          },
          "cpvCode": {
            "name": "cpvCode",
            "qname": "ContractAward:cpvCode",
            "label": "CPV code",
            "type": "identifier",
            "description": "Contract Procurement Vocabulary (what type of goods/services, EU)",
            "matchable": true
          },
          "nutsCode": {
            "name": "nutsCode",
            "qname": "ContractAward:nutsCode",
            "label": "NUTS code",
            "type": "identifier",
            "description": "Nomencalture of Territorial Units for Statistics (NUTS)",
            "matchable": true
          },
          "amended": {
            "name": "amended",
            "qname": "ContractAward:amended",
            "label": "Amended",
            "type": "string",
            "description": "Was this award amended, modified or updated by a subsequent document?"
          }
        }
      },
      "Debt": {
        "label": "Debt",
        "plural": "Debts",
        "schemata": ["Debt", "Interval", "Value"],
        "extends": ["Interval", "Value"],
        "edge": {
          "source": "debtor",
          "target": "creditor",
          "caption": ["amount"],
          "label": "owes",
          "directed": true
        },
        "featured": ["debtor", "creditor", "date", "amount"],
        "required": ["debtor"],
        "description": "A monetary debt between two parties.",
        "properties": {
          "debtor": {
            "name": "debtor",
            "qname": "Debt:debtor",
            "label": "Debtor",
            "type": "entity",
            "matchable": true,
            "range": "LegalEntity",
            "reverse": "debtDebtor"
          },
          "creditor": {
            "name": "creditor",
            "qname": "Debt:creditor",
            "label": "Creditor",
            "type": "entity",
            "matchable": true,
            "range": "LegalEntity",
            "reverse": "debtCreditor"
          }
        }
      },
      "RealEstate": {
        "label": "Real estate",
        "plural": "Real estates",
        "schemata": ["Asset", "RealEstate", "Thing", "Value"],
        "extends": ["Asset"],
        "featured": ["registrationNumber", "address", "country"],
        "caption": ["name", "address", "registrationNumber"],
        "description": "A piece of land or property.",
        "properties": {
          "latitude": {
            "name": "latitude",
            "qname": "RealEstate:latitude",
            "label": "Latitude",
            "type": "number"
          },
          "longitude": {
            "name": "longitude",
            "qname": "RealEstate:longitude",
            "label": "Longitude",
            "type": "number"
          },
          "censusBlock": {
            "name": "censusBlock",
            "qname": "RealEstate:censusBlock",
            "label": "Census block",
            "type": "string"
          },
          "cadastralCode": {
            "name": "cadastralCode",
            "qname": "RealEstate:cadastralCode",
            "label": "Cadastral code",
            "type": "identifier",
            "matchable": true
          },
          "area": {
            "name": "area",
            "qname": "RealEstate:area",
            "label": "Area",
            "type": "number"
          },
          "registrationNumber": {
            "name": "registrationNumber",
            "qname": "RealEstate:registrationNumber",
            "label": "Registration number",
            "type": "identifier",
            "matchable": true
          },
          "titleNumber": {
            "name": "titleNumber",
            "qname": "RealEstate:titleNumber",
            "label": "Title number",
            "type": "identifier",
            "matchable": true
          },
          "tenure": {
            "name": "tenure",
            "qname": "RealEstate:tenure",
            "label": "Tenure",
            "type": "string"
          },
          "encumbrance": {
            "name": "encumbrance",
            "qname": "RealEstate:encumbrance",
            "label": "Encumbrance",
            "type": "string",
            "description": "An encumbrance is a right to, interest in, or legal liability on real property that does not prohibit passing title to the property but that diminishes its value.\n"
          },
          "propertyType": {
            "name": "propertyType",
            "qname": "RealEstate:propertyType",
            "label": "Property type",
            "type": "string"
          },
          "landType": {
            "name": "landType",
            "qname": "RealEstate:landType",
            "label": "Land type",
            "type": "string"
          },
          "createDate": {
            "name": "createDate",
            "qname": "RealEstate:createDate",
            "label": "Record date",
            "type": "date",
            "matchable": true
          },
          "parent": {
            "name": "parent",
            "qname": "RealEstate:parent",
            "label": "Parent unit",
            "type": "entity",
            "description": "If this entity is a subunit, another entity (real estate) is its parent",
            "matchable": true,
            "range": "RealEstate",
            "reverse": "subunits"
          },
          "subunits": {
            "name": "subunits",
            "qname": "RealEstate:subunits",
            "label": "Subunits",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "RealEstate",
            "reverse": "parent"
          }
        }
      },
      "Address": {
        "label": "Address",
        "plural": "Addresses",
        "schemata": ["Address", "Thing"],
        "extends": ["Thing"],
        "featured": ["full", "city", "street", "country"],
        "caption": ["full", "summary", "city", "remarks"],
        "description": "A location associated with an entity.\n",
        "matchable": true,
        "properties": {
          "full": {
            "name": "full",
            "qname": "Address:full",
            "label": "Full address",
            "type": "address",
            "matchable": true
          },
          "remarks": {
            "name": "remarks",
            "qname": "Address:remarks",
            "label": "Remarks",
            "type": "string",
            "description": "Handling instructions, like 'care of'."
          },
          "postOfficeBox": {
            "name": "postOfficeBox",
            "qname": "Address:postOfficeBox",
            "label": "PO Box",
            "type": "string",
            "description": "A mailbox identifier at the post office"
          },
          "street": {
            "name": "street",
            "qname": "Address:street",
            "label": "Street address",
            "type": "string"
          },
          "street2": {
            "name": "street2",
            "qname": "Address:street2",
            "label": "Street address (ctd.)",
            "type": "string"
          },
          "city": {
            "name": "city",
            "qname": "Address:city",
            "label": "City",
            "type": "string",
            "description": "City, town, village or other locality"
          },
          "postalCode": {
            "name": "postalCode",
            "qname": "Address:postalCode",
            "label": "Postal code",
            "type": "string",
            "description": "Zip code or postcode."
          },
          "region": {
            "name": "region",
            "qname": "Address:region",
            "label": "Region",
            "type": "string",
            "description": "Also province or area."
          },
          "state": {
            "name": "state",
            "qname": "Address:state",
            "label": "State",
            "type": "string",
            "description": "State or federal unit."
          },
          "latitude": {
            "name": "latitude",
            "qname": "Address:latitude",
            "label": "Latitude",
            "type": "number"
          },
          "longitude": {
            "name": "longitude",
            "qname": "Address:longitude",
            "label": "Longitude",
            "type": "number"
          },
          "country": {
            "name": "country",
            "qname": "Address:country",
            "label": "Country",
            "type": "country",
            "matchable": true
          },
          "osmId": {
            "name": "osmId",
            "qname": "Address:osmId",
            "label": "OpenStreetmap Place ID",
            "type": "identifier",
            "matchable": true
          },
          "googlePlaceId": {
            "name": "googlePlaceId",
            "qname": "Address:googlePlaceId",
            "label": "Google Places ID",
            "type": "identifier",
            "matchable": true
          },
          "things": {
            "name": "things",
            "qname": "Address:things",
            "label": "Located there",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Thing",
            "reverse": "addressEntity"
          },
          "tripsDeparting": {
            "name": "tripsDeparting",
            "qname": "Address:tripsDeparting",
            "label": "Trips departing",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Trip",
            "reverse": "startLocation"
          },
          "tripsIncoming": {
            "name": "tripsIncoming",
            "qname": "Address:tripsIncoming",
            "label": "Trips incoming",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Trip",
            "reverse": "endLocation"
          }
        }
      },
      "Position": {
        "label": "Position",
        "plural": "Positions",
        "schemata": ["Position", "Thing"],
        "extends": ["Thing"],
        "temporalExtent": {
          "start": ["inceptionDate"],
          "end": ["dissolutionDate"]
        },
        "featured": ["name", "country", "subnationalArea"],
        "required": ["name"],
        "caption": ["name"],
        "description": "A post, role or position within an organization or body. This describes a position one or more people may occupy and not the occupation of the post by a specific individual at a  specific point in time.\n'subnationalArea' should be used to further restrict the scope of the position. It should not simply represent some regional aspect of the role - e.g. the constituency of a national member of parliament - when their legislative jurisdiction is nationwide.\n",
        "matchable": true,
        "properties": {
          "organization": {
            "name": "organization",
            "qname": "Position:organization",
            "label": "Organization",
            "type": "entity",
            "matchable": true,
            "range": "Organization",
            "reverse": "positions"
          },
          "inceptionDate": {
            "name": "inceptionDate",
            "qname": "Position:inceptionDate",
            "label": "Inception date",
            "type": "date",
            "matchable": true
          },
          "dissolutionDate": {
            "name": "dissolutionDate",
            "qname": "Position:dissolutionDate",
            "label": "Dissolution date",
            "type": "date",
            "matchable": true
          },
          "subnationalArea": {
            "name": "subnationalArea",
            "qname": "Position:subnationalArea",
            "label": "Subnational jurisdiction name or code",
            "type": "string"
          },
          "numberOfSeats": {
            "name": "numberOfSeats",
            "qname": "Position:numberOfSeats",
            "label": "Total number of seats",
            "type": "number"
          },
          "occupancies": {
            "name": "occupancies",
            "qname": "Position:occupancies",
            "label": "Position holders",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Occupancy",
            "reverse": "post"
          }
        }
      },
      "Family": {
        "label": "Family",
        "plural": "Family members",
        "schemata": ["Family", "Interval"],
        "extends": ["Interval"],
        "edge": {
          "source": "person",
          "target": "relative",
          "caption": ["relationship"],
          "label": "related to",
          "directed": false
        },
        "featured": ["person", "relative", "relationship"],
        "required": ["person", "relative"],
        "description": "Family relationship between two people",
        "properties": {
          "person": {
            "name": "person",
            "qname": "Family:person",
            "label": "Person",
            "type": "entity",
            "description": "The subject of the familial relation.",
            "matchable": true,
            "range": "Person",
            "reverse": "familyPerson"
          },
          "relative": {
            "name": "relative",
            "qname": "Family:relative",
            "label": "Relative",
            "type": "entity",
            "description": "The relative of the subject person.",
            "matchable": true,
            "range": "Person",
            "reverse": "familyRelative"
          },
          "relationship": {
            "name": "relationship",
            "qname": "Family:relationship",
            "label": "Relationship",
            "type": "string",
            "description": "Nature of the relationship, from the person's perspective eg. 'mother', where 'relative' is mother of 'person'."
          }
        }
      },
      "Call": {
        "label": "Call",
        "plural": "Calls",
        "schemata": ["Call", "Interval"],
        "extends": ["Interval"],
        "featured": [
          "callerNumber",
          "caller",
          "receiverNumber",
          "receiver",
          "date"
        ],
        "caption": ["callerNumber", "receiverNumber"],
        "generated": true,
        "properties": {
          "caller": {
            "name": "caller",
            "qname": "Call:caller",
            "label": "Caller",
            "type": "entity",
            "matchable": true,
            "range": "LegalEntity",
            "reverse": "callsMade"
          },
          "callerNumber": {
            "name": "callerNumber",
            "qname": "Call:callerNumber",
            "label": "Caller's Number",
            "type": "phone",
            "matchable": true
          },
          "receiver": {
            "name": "receiver",
            "qname": "Call:receiver",
            "label": "Receiver",
            "type": "entity",
            "matchable": true,
            "range": "LegalEntity",
            "reverse": "callsReceived"
          },
          "receiverNumber": {
            "name": "receiverNumber",
            "qname": "Call:receiverNumber",
            "label": "Receiver's Number",
            "type": "phone",
            "matchable": true
          },
          "duration": {
            "name": "duration",
            "qname": "Call:duration",
            "label": "Duration",
            "type": "number"
          }
        }
      },
      "Identification": {
        "label": "Identification",
        "plural": "Identifications",
        "schemata": ["Identification", "Interval"],
        "extends": ["Interval"],
        "featured": [
          "number",
          "country",
          "type",
          "holder",
          "startDate",
          "endDate"
        ],
        "required": ["holder", "number"],
        "caption": ["number"],
        "description": "An form of identification associated with its holder and some issuing country. This can be used for national ID cards, voter enrollments and similar instruments.\n",
        "properties": {
          "holder": {
            "name": "holder",
            "qname": "Identification:holder",
            "label": "Identification holder",
            "type": "entity",
            "matchable": true,
            "range": "LegalEntity",
            "reverse": "identification"
          },
          "type": {
            "name": "type",
            "qname": "Identification:type",
            "label": "Type",
            "type": "string"
          },
          "country": {
            "name": "country",
            "qname": "Identification:country",
            "label": "Country",
            "type": "country",
            "matchable": true
          },
          "number": {
            "name": "number",
            "qname": "Identification:number",
            "label": "Document number",
            "type": "identifier",
            "matchable": true
          },
          "authority": {
            "name": "authority",
            "qname": "Identification:authority",
            "label": "Authority",
            "type": "string"
          }
        }
      },
      "Passport": {
        "label": "Passport",
        "plural": "Passports",
        "schemata": ["Identification", "Interval", "Passport"],
        "extends": ["Identification"],
        "featured": [
          "passportNumber",
          "country",
          "type",
          "holder",
          "startDate",
          "endDate"
        ],
        "required": ["holder", "passportNumber", "number"],
        "caption": ["passportNumber", "number"],
        "description": "An passport held by a person.\n",
        "properties": {
          "passportNumber": {
            "name": "passportNumber",
            "qname": "Passport:passportNumber",
            "label": "Passport number",
            "type": "identifier",
            "matchable": true
          },
          "surname": {
            "name": "surname",
            "qname": "Passport:surname",
            "label": "Surname",
            "type": "string"
          },
          "givenName": {
            "name": "givenName",
            "qname": "Passport:givenName",
            "label": "Given name",
            "type": "string"
          },
          "birthDate": {
            "name": "birthDate",
            "qname": "Passport:birthDate",
            "label": "Birth date",
            "type": "date",
            "matchable": true
          },
          "birthPlace": {
            "name": "birthPlace",
            "qname": "Passport:birthPlace",
            "label": "Place of birth",
            "type": "string"
          },
          "gender": {
            "name": "gender",
            "qname": "Passport:gender",
            "label": "Gender",
            "type": "string"
          },
          "personalNumber": {
            "name": "personalNumber",
            "qname": "Passport:personalNumber",
            "label": "Personal number",
            "type": "identifier",
            "matchable": true
          }
        }
      },
      "Membership": {
        "label": "Membership",
        "plural": "Memberships",
        "schemata": ["Interest", "Interval", "Membership"],
        "extends": ["Interest"],
        "edge": {
          "source": "member",
          "target": "organization",
          "caption": ["role"],
          "label": "belongs to",
          "directed": true
        },
        "featured": ["member", "organization", "role", "startDate", "endDate"],
        "required": ["member", "organization"],
        "caption": ["role"],
        "properties": {
          "member": {
            "name": "member",
            "qname": "Membership:member",
            "label": "Member",
            "type": "entity",
            "matchable": true,
            "range": "LegalEntity",
            "reverse": "membershipMember"
          },
          "organization": {
            "name": "organization",
            "qname": "Membership:organization",
            "label": "Organization",
            "type": "entity",
            "matchable": true,
            "range": "Organization",
            "reverse": "membershipOrganization"
          }
        }
      },
      "Interval": {
        "label": "Interval",
        "plural": "Interval",
        "schemata": ["Interval"],
        "extends": [],
        "temporalExtent": {
          "start": ["date", "startDate"],
          "end": ["endDate"]
        },
        "description": "An object which is bounded in time.\n",
        "abstract": true,
        "properties": {
          "startDate": {
            "name": "startDate",
            "qname": "Interval:startDate",
            "label": "Start date",
            "type": "date",
            "matchable": true
          },
          "endDate": {
            "name": "endDate",
            "qname": "Interval:endDate",
            "label": "End date",
            "type": "date",
            "matchable": true
          },
          "date": {
            "name": "date",
            "qname": "Interval:date",
            "label": "Date",
            "type": "date",
            "matchable": true
          },
          "summary": {
            "name": "summary",
            "qname": "Interval:summary",
            "label": "Summary",
            "type": "text"
          },
          "description": {
            "name": "description",
            "qname": "Interval:description",
            "label": "Description",
            "type": "text"
          },
          "recordId": {
            "name": "recordId",
            "qname": "Interval:recordId",
            "label": "Record ID",
            "type": "string"
          },
          "sourceUrl": {
            "name": "sourceUrl",
            "qname": "Interval:sourceUrl",
            "label": "Source link",
            "type": "url"
          },
          "publisher": {
            "name": "publisher",
            "qname": "Interval:publisher",
            "label": "Publishing source",
            "type": "string"
          },
          "publisherUrl": {
            "name": "publisherUrl",
            "qname": "Interval:publisherUrl",
            "label": "Publishing source URL",
            "type": "url"
          },
          "alephUrl": {
            "name": "alephUrl",
            "qname": "Interval:alephUrl",
            "label": "Aleph URL",
            "type": "url",
            "hidden": true
          },
          "namesMentioned": {
            "name": "namesMentioned",
            "qname": "Interval:namesMentioned",
            "label": "Detected names",
            "type": "name",
            "matchable": true,
            "hidden": true
          },
          "indexText": {
            "name": "indexText",
            "qname": "Interval:indexText",
            "label": "Index text",
            "type": "text",
            "hidden": true
          },
          "modifiedAt": {
            "name": "modifiedAt",
            "qname": "Interval:modifiedAt",
            "label": "Modified on",
            "type": "date",
            "matchable": true
          },
          "retrievedAt": {
            "name": "retrievedAt",
            "qname": "Interval:retrievedAt",
            "label": "Retrieved on",
            "type": "date"
          }
        }
      },
      "Airplane": {
        "label": "Airplane",
        "plural": "Airplanes",
        "schemata": ["Airplane", "Asset", "Thing", "Value", "Vehicle"],
        "extends": ["Vehicle"],
        "featured": [
          "type",
          "registrationNumber",
          "country",
          "operator",
          "owner"
        ],
        "caption": ["name", "registrationNumber"],
        "description": "An airplane, helicopter or other flying vehicle.\n",
        "matchable": true,
        "properties": {
          "serialNumber": {
            "name": "serialNumber",
            "qname": "Airplane:serialNumber",
            "label": "Serial Number",
            "type": "identifier",
            "matchable": true
          },
          "icaoCode": {
            "name": "icaoCode",
            "qname": "Airplane:icaoCode",
            "label": "ICAO aircraft type designator",
            "type": "string"
          },
          "manufacturer": {
            "name": "manufacturer",
            "qname": "Airplane:manufacturer",
            "label": "Manufacturer",
            "type": "string"
          }
        }
      },
      "Company": {
        "label": "Company",
        "plural": "Companies",
        "schemata": [
          "Asset",
          "Company",
          "LegalEntity",
          "Organization",
          "Thing",
          "Value"
        ],
        "extends": ["Asset", "Organization"],
        "featured": [
          "name",
          "jurisdiction",
          "registrationNumber",
          "incorporationDate"
        ],
        "required": ["name"],
        "caption": ["name"],
        "description": "A corporation, usually for profit. Does not distinguish between private and public companies, and can also be used to model more specific constructs like trusts and funds. Companies are assets, so they can be owned by other legal entities.\n",
        "matchable": true,
        "properties": {
          "jurisdiction": {
            "name": "jurisdiction",
            "qname": "Company:jurisdiction",
            "label": "Jurisdiction",
            "type": "country",
            "matchable": true
          },
          "registrationNumber": {
            "name": "registrationNumber",
            "qname": "Company:registrationNumber",
            "label": "Registration number",
            "type": "identifier",
            "matchable": true
          },
          "capital": {
            "name": "capital",
            "qname": "Company:capital",
            "label": "Capital",
            "type": "string"
          },
          "voenCode": {
            "name": "voenCode",
            "qname": "Company:voenCode",
            "label": "VOEN",
            "type": "identifier",
            "description": "Azerbaijan taxpayer ID",
            "matchable": true
          },
          "coatoCode": {
            "name": "coatoCode",
            "qname": "Company:coatoCode",
            "label": "COATO / SOATO / OKATO",
            "type": "identifier",
            "description": "Soviet classifier for territories, regions, districts, villages. Aka. SOATO and same as OKATO"
          },
          "irsCode": {
            "name": "irsCode",
            "qname": "Company:irsCode",
            "label": "IRS Number",
            "type": "identifier",
            "description": "US tax ID",
            "matchable": true
          },
          "ipoCode": {
            "name": "ipoCode",
            "qname": "Company:ipoCode",
            "label": "IPO",
            "type": "identifier"
          },
          "cikCode": {
            "name": "cikCode",
            "qname": "Company:cikCode",
            "label": "SEC Central Index Key",
            "type": "identifier",
            "description": "US SEC Central Index Key",
            "matchable": true
          },
          "jibCode": {
            "name": "jibCode",
            "qname": "Company:jibCode",
            "label": "JIB",
            "type": "identifier",
            "description": "Yugoslavia company ID",
            "matchable": true
          },
          "mbsCode": {
            "name": "mbsCode",
            "qname": "Company:mbsCode",
            "label": "MBS",
            "type": "identifier",
            "matchable": true
          },
          "ibcRuc": {
            "name": "ibcRuc",
            "qname": "Company:ibcRuc",
            "label": "ibcRUC",
            "type": "identifier",
            "matchable": true
          },
          "caemCode": {
            "name": "caemCode",
            "qname": "Company:caemCode",
            "label": "COD CAEM",
            "type": "string",
            "description": "(RO) What kind of activity a legal entity is allowed to develop"
          },
          "kppCode": {
            "name": "kppCode",
            "qname": "Company:kppCode",
            "label": "KPP",
            "type": "identifier",
            "description": "(RU, КПП) in addition to INN for orgs; reason for registration at FNS"
          },
          "okvedCode": {
            "name": "okvedCode",
            "qname": "Company:okvedCode",
            "label": "OKVED(2) Classifier",
            "type": "string",
            "description": "(RU, ОКВЭД) Economical activity classifier. OKVED2 is the same but newer"
          },
          "okopfCode": {
            "name": "okopfCode",
            "qname": "Company:okopfCode",
            "label": "OKOPF",
            "type": "string",
            "description": "(RU, ОКОПФ) What kind of business entity"
          },
          "fnsCode": {
            "name": "fnsCode",
            "qname": "Company:fnsCode",
            "label": "Federal tax service code",
            "type": "identifier",
            "description": "(RU, ФНС) Federal Tax Service related info"
          },
          "fssCode": {
            "name": "fssCode",
            "qname": "Company:fssCode",
            "label": "FSS",
            "type": "string",
            "description": "(RU, ФСС) Social Security"
          },
          "bikCode": {
            "name": "bikCode",
            "qname": "Company:bikCode",
            "label": "BIK",
            "type": "string",
            "description": "Russian bank account code"
          },
          "pfrNumber": {
            "name": "pfrNumber",
            "qname": "Company:pfrNumber",
            "label": "PFR Number",
            "type": "identifier",
            "description": "(RU, ПФР) Pension Fund Registration number. AAA-BBB-CCCCCC, where AAA is organisation region, BBB is district, CCCCCC number at a specific branch",
            "matchable": true
          },
          "oksmCode": {
            "name": "oksmCode",
            "qname": "Company:oksmCode",
            "label": "OKSM",
            "type": "string",
            "description": "Russian (ОКСМ) countries classifier"
          },
          "isinCode": {
            "name": "isinCode",
            "qname": "Company:isinCode",
            "label": "ISIN",
            "type": "identifier",
            "description": "International Securities Identification Number",
            "matchable": true
          },
          "ticker": {
            "name": "ticker",
            "qname": "Company:ticker",
            "label": "Stock ticker symbol",
            "type": "identifier",
            "matchable": true
          },
          "permId": {
            "name": "permId",
            "qname": "Company:permId",
            "label": "PermID",
            "type": "identifier",
            "description": "LSEG/Refinitiv code for a company",
            "matchable": true
          },
          "ricCode": {
            "name": "ricCode",
            "qname": "Company:ricCode",
            "label": "Reuters Instrument Code",
            "type": "identifier",
            "matchable": true
          }
        }
      },
      "UnknownLink": {
        "label": "Other link",
        "plural": "Other links",
        "schemata": ["Interest", "Interval", "UnknownLink"],
        "extends": ["Interest"],
        "edge": {
          "source": "subject",
          "target": "object",
          "caption": ["role"],
          "label": "linked to",
          "directed": false
        },
        "featured": ["subject", "object", "role"],
        "required": ["subject", "object"],
        "properties": {
          "subject": {
            "name": "subject",
            "qname": "UnknownLink:subject",
            "label": "Subject",
            "type": "entity",
            "matchable": true,
            "range": "Thing",
            "reverse": "unknownLinkTo"
          },
          "object": {
            "name": "object",
            "qname": "UnknownLink:object",
            "label": "Object",
            "type": "entity",
            "matchable": true,
            "range": "Thing",
            "reverse": "unknownLinkFrom"
          }
        }
      },
      "CourtCaseParty": {
        "label": "Case party",
        "plural": "Case parties",
        "schemata": ["CourtCaseParty", "Interest", "Interval"],
        "extends": ["Interest"],
        "edge": {
          "source": "party",
          "target": "case",
          "caption": ["role"],
          "label": "involved in",
          "directed": true
        },
        "featured": ["party", "case", "role"],
        "required": ["case", "party"],
        "properties": {
          "party": {
            "name": "party",
            "qname": "CourtCaseParty:party",
            "label": "Party",
            "type": "entity",
            "matchable": true,
            "range": "Thing",
            "reverse": "courtCase"
          },
          "case": {
            "name": "case",
            "qname": "CourtCaseParty:case",
            "label": "Case",
            "type": "entity",
            "matchable": true,
            "range": "CourtCase",
            "reverse": "parties"
          }
        }
      },
      "Person": {
        "label": "Person",
        "plural": "People",
        "schemata": ["LegalEntity", "Person", "Thing"],
        "extends": ["LegalEntity"],
        "temporalExtent": {
          "start": ["birthDate"],
          "end": ["deathDate"]
        },
        "featured": ["name", "nationality", "birthDate"],
        "required": ["name"],
        "caption": ["name", "lastName", "email", "phone"],
        "description": "A natural person, as opposed to a corporation of some type.\n",
        "matchable": true,
        "properties": {
          "title": {
            "name": "title",
            "qname": "Person:title",
            "label": "Title",
            "type": "string"
          },
          "firstName": {
            "name": "firstName",
            "qname": "Person:firstName",
            "label": "First name",
            "type": "string"
          },
          "secondName": {
            "name": "secondName",
            "qname": "Person:secondName",
            "label": "Second name",
            "type": "string"
          },
          "middleName": {
            "name": "middleName",
            "qname": "Person:middleName",
            "label": "Middle name",
            "type": "string"
          },
          "fatherName": {
            "name": "fatherName",
            "qname": "Person:fatherName",
            "label": "Patronymic",
            "type": "string"
          },
          "motherName": {
            "name": "motherName",
            "qname": "Person:motherName",
            "label": "Matronymic",
            "type": "string"
          },
          "lastName": {
            "name": "lastName",
            "qname": "Person:lastName",
            "label": "Last name",
            "type": "string"
          },
          "nameSuffix": {
            "name": "nameSuffix",
            "qname": "Person:nameSuffix",
            "label": "Name suffix",
            "type": "string"
          },
          "birthDate": {
            "name": "birthDate",
            "qname": "Person:birthDate",
            "label": "Birth date",
            "type": "date",
            "matchable": true
          },
          "birthPlace": {
            "name": "birthPlace",
            "qname": "Person:birthPlace",
            "label": "Place of birth",
            "type": "string"
          },
          "birthCountry": {
            "name": "birthCountry",
            "qname": "Person:birthCountry",
            "label": "Country of birth",
            "type": "country",
            "matchable": true
          },
          "deathDate": {
            "name": "deathDate",
            "qname": "Person:deathDate",
            "label": "Death date",
            "type": "date",
            "matchable": true
          },
          "position": {
            "name": "position",
            "qname": "Person:position",
            "label": "Position",
            "type": "string"
          },
          "nationality": {
            "name": "nationality",
            "qname": "Person:nationality",
            "label": "Nationality",
            "type": "country",
            "matchable": true
          },
          "passportNumber": {
            "name": "passportNumber",
            "qname": "Person:passportNumber",
            "label": "Passport number",
            "type": "identifier",
            "matchable": true
          },
          "gender": {
            "name": "gender",
            "qname": "Person:gender",
            "label": "Gender",
            "type": "gender"
          },
          "ethnicity": {
            "name": "ethnicity",
            "qname": "Person:ethnicity",
            "label": "Ethnicity",
            "type": "string"
          },
          "religion": {
            "name": "religion",
            "qname": "Person:religion",
            "label": "Religion",
            "type": "string"
          },
          "political": {
            "name": "political",
            "qname": "Person:political",
            "label": "Political association",
            "type": "string"
          },
          "education": {
            "name": "education",
            "qname": "Person:education",
            "label": "Education",
            "type": "string"
          },
          "employers": {
            "name": "employers",
            "qname": "Person:employers",
            "label": "Employers",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Employment",
            "reverse": "employee"
          },
          "posts": {
            "name": "posts",
            "qname": "Person:posts",
            "label": "Posts held",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Post",
            "reverse": "holder"
          },
          "familyPerson": {
            "name": "familyPerson",
            "qname": "Person:familyPerson",
            "label": "Family members",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Family",
            "reverse": "person"
          },
          "familyRelative": {
            "name": "familyRelative",
            "qname": "Person:familyRelative",
            "label": "Relatives",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Family",
            "reverse": "relative"
          },
          "images": {
            "name": "images",
            "qname": "Person:images",
            "label": "Images",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Image",
            "reverse": "pictured"
          },
          "positionOccupancies": {
            "name": "positionOccupancies",
            "qname": "Person:positionOccupancies",
            "label": "Positions held",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Occupancy",
            "reverse": "holder"
          },
          "associates": {
            "name": "associates",
            "qname": "Person:associates",
            "label": "Associates",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Associate",
            "reverse": "person"
          },
          "associations": {
            "name": "associations",
            "qname": "Person:associations",
            "label": "Associations",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Associate",
            "reverse": "associate"
          }
        }
      },
      "ProjectParticipant": {
        "label": "Project participant",
        "plural": "Project participants",
        "schemata": ["Interest", "Interval", "ProjectParticipant"],
        "extends": ["Interest"],
        "edge": {
          "source": "participant",
          "target": "project",
          "caption": ["role"],
          "label": "participates in",
          "directed": true
        },
        "featured": ["project", "participant", "role"],
        "caption": ["role"],
        "description": "An activity carried out by a group of participants.\n",
        "properties": {
          "project": {
            "name": "project",
            "qname": "ProjectParticipant:project",
            "label": "Project",
            "type": "entity",
            "matchable": true,
            "range": "Project",
            "reverse": "participants"
          },
          "participant": {
            "name": "participant",
            "qname": "ProjectParticipant:participant",
            "label": "Participant",
            "type": "entity",
            "matchable": true,
            "range": "LegalEntity",
            "reverse": "projectParticipation"
          }
        }
      },
      "CourtCase": {
        "label": "Court case",
        "plural": "Court cases",
        "schemata": ["CourtCase", "Thing"],
        "extends": ["Thing"],
        "temporalExtent": {
          "start": ["fileDate"],
          "end": ["closeDate"]
        },
        "featured": ["name", "fileDate", "caseNumber"],
        "required": ["name"],
        "caption": ["name", "caseNumber"],
        "properties": {
          "category": {
            "name": "category",
            "qname": "CourtCase:category",
            "label": "Category",
            "type": "string"
          },
          "type": {
            "name": "type",
            "qname": "CourtCase:type",
            "label": "Type",
            "type": "string"
          },
          "status": {
            "name": "status",
            "qname": "CourtCase:status",
            "label": "Status",
            "type": "string"
          },
          "caseNumber": {
            "name": "caseNumber",
            "qname": "CourtCase:caseNumber",
            "label": "Case number",
            "type": "identifier",
            "matchable": true
          },
          "court": {
            "name": "court",
            "qname": "CourtCase:court",
            "label": "Court",
            "type": "string"
          },
          "fileDate": {
            "name": "fileDate",
            "qname": "CourtCase:fileDate",
            "label": "File date",
            "type": "date",
            "matchable": true
          },
          "closeDate": {
            "name": "closeDate",
            "qname": "CourtCase:closeDate",
            "label": "Close date",
            "type": "date",
            "matchable": true
          },
          "parties": {
            "name": "parties",
            "qname": "CourtCase:parties",
            "label": "Parties",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "CourtCaseParty",
            "reverse": "case"
          }
        }
      },
      "BankAccount": {
        "label": "Bank account",
        "plural": "Bank accounts",
        "schemata": ["Asset", "BankAccount", "Thing", "Value"],
        "extends": ["Asset"],
        "temporalExtent": {
          "start": ["openingDate"],
          "end": ["closingDate"]
        },
        "featured": ["accountNumber", "bankName"],
        "caption": ["name", "iban", "accountNumber"],
        "description": "An account held at a bank and controlled by an owner. This may also be used  to describe more complex arrangements like correspondent bank settlement accounts.\n",
        "matchable": true,
        "properties": {
          "bankName": {
            "name": "bankName",
            "qname": "BankAccount:bankName",
            "label": "Bank name",
            "type": "string"
          },
          "accountNumber": {
            "name": "accountNumber",
            "qname": "BankAccount:accountNumber",
            "label": "Account number",
            "type": "identifier",
            "matchable": true
          },
          "iban": {
            "name": "iban",
            "qname": "BankAccount:iban",
            "label": "IBAN",
            "type": "iban",
            "matchable": true
          },
          "bic": {
            "name": "bic",
            "qname": "BankAccount:bic",
            "label": "Bank Identifier Code",
            "type": "identifier",
            "matchable": true
          },
          "bank": {
            "name": "bank",
            "qname": "BankAccount:bank",
            "label": "Bank",
            "type": "entity",
            "matchable": true,
            "range": "Organization",
            "reverse": "bankAccounts"
          },
          "accountType": {
            "name": "accountType",
            "qname": "BankAccount:accountType",
            "label": "Account type",
            "type": "string"
          },
          "openingDate": {
            "name": "openingDate",
            "qname": "BankAccount:openingDate",
            "label": "Opening date",
            "type": "date",
            "matchable": true
          },
          "closingDate": {
            "name": "closingDate",
            "qname": "BankAccount:closingDate",
            "label": "Closing date",
            "type": "date",
            "matchable": true
          },
          "balance": {
            "name": "balance",
            "qname": "BankAccount:balance",
            "label": "Balance",
            "type": "number"
          },
          "balanceDate": {
            "name": "balanceDate",
            "qname": "BankAccount:balanceDate",
            "label": "Balance date",
            "type": "date",
            "matchable": true
          },
          "maxBalance": {
            "name": "maxBalance",
            "qname": "BankAccount:maxBalance",
            "label": "Maximum balance",
            "type": "number"
          },
          "maxBalanceDate": {
            "name": "maxBalanceDate",
            "qname": "BankAccount:maxBalanceDate",
            "label": "Maximum balance date",
            "type": "date",
            "matchable": true
          },
          "bankAddress": {
            "name": "bankAddress",
            "qname": "BankAccount:bankAddress",
            "label": "Bank address",
            "type": "string"
          },
          "paymentPayerAccount": {
            "name": "paymentPayerAccount",
            "qname": "BankAccount:paymentPayerAccount",
            "label": "Payments made",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Payment",
            "reverse": "payerAccount"
          },
          "paymentBeneficiaryAccount": {
            "name": "paymentBeneficiaryAccount",
            "qname": "BankAccount:paymentBeneficiaryAccount",
            "label": "Payments received",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Payment",
            "reverse": "beneficiaryAccount"
          },
          "contractBankAccount": {
            "name": "contractBankAccount",
            "qname": "BankAccount:contractBankAccount",
            "label": "Customs declarations",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "EconomicActivity",
            "reverse": "bankAccount"
          },
          "rubBankAccount": {
            "name": "rubBankAccount",
            "qname": "BankAccount:rubBankAccount",
            "label": "Customs declarations (as rouble bank)",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "EconomicActivity",
            "reverse": "bankRub"
          },
          "foreignBankAccount": {
            "name": "foreignBankAccount",
            "qname": "BankAccount:foreignBankAccount",
            "label": "Customs declarations (as foreign bank)",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "EconomicActivity",
            "reverse": "bankForeign"
          }
        }
      },
      "Thing": {
        "label": "Thing",
        "plural": "Thing",
        "schemata": ["Thing"],
        "extends": [],
        "featured": ["name", "country"],
        "required": ["name"],
        "caption": ["name"],
        "abstract": true,
        "properties": {
          "name": {
            "name": "name",
            "qname": "Thing:name",
            "label": "Name",
            "type": "name",
            "matchable": true
          },
          "summary": {
            "name": "summary",
            "qname": "Thing:summary",
            "label": "Summary",
            "type": "text"
          },
          "description": {
            "name": "description",
            "qname": "Thing:description",
            "label": "Description",
            "type": "text"
          },
          "country": {
            "name": "country",
            "qname": "Thing:country",
            "label": "Country",
            "type": "country",
            "matchable": true
          },
          "alias": {
            "name": "alias",
            "qname": "Thing:alias",
            "label": "Other name",
            "type": "name",
            "matchable": true
          },
          "previousName": {
            "name": "previousName",
            "qname": "Thing:previousName",
            "label": "Previous name",
            "type": "name",
            "matchable": true
          },
          "weakAlias": {
            "name": "weakAlias",
            "qname": "Thing:weakAlias",
            "label": "Weak alias",
            "type": "name"
          },
          "sourceUrl": {
            "name": "sourceUrl",
            "qname": "Thing:sourceUrl",
            "label": "Source link",
            "type": "url"
          },
          "publisher": {
            "name": "publisher",
            "qname": "Thing:publisher",
            "label": "Publishing source",
            "type": "string"
          },
          "publisherUrl": {
            "name": "publisherUrl",
            "qname": "Thing:publisherUrl",
            "label": "Publishing source URL",
            "type": "url"
          },
          "alephUrl": {
            "name": "alephUrl",
            "qname": "Thing:alephUrl",
            "label": "Aleph URL",
            "type": "url",
            "hidden": true
          },
          "wikipediaUrl": {
            "name": "wikipediaUrl",
            "qname": "Thing:wikipediaUrl",
            "label": "Wikipedia Article",
            "type": "url",
            "matchable": true
          },
          "wikidataId": {
            "name": "wikidataId",
            "qname": "Thing:wikidataId",
            "label": "Wikidata ID",
            "type": "identifier",
            "matchable": true
          },
          "keywords": {
            "name": "keywords",
            "qname": "Thing:keywords",
            "label": "Keywords",
            "type": "string"
          },
          "topics": {
            "name": "topics",
            "qname": "Thing:topics",
            "label": "Topics",
            "type": "topic"
          },
          "address": {
            "name": "address",
            "qname": "Thing:address",
            "label": "Address",
            "type": "address",
            "matchable": true
          },
          "addressEntity": {
            "name": "addressEntity",
            "qname": "Thing:addressEntity",
            "label": "Address",
            "type": "entity",
            "matchable": true,
            "range": "Address",
            "reverse": "things"
          },
          "program": {
            "name": "program",
            "qname": "Thing:program",
            "label": "Program",
            "type": "string"
          },
          "notes": {
            "name": "notes",
            "qname": "Thing:notes",
            "label": "Notes",
            "type": "text"
          },
          "proof": {
            "name": "proof",
            "qname": "Thing:proof",
            "label": "Source document",
            "type": "entity",
            "matchable": true,
            "range": "Document",
            "reverse": "proven"
          },
          "indexText": {
            "name": "indexText",
            "qname": "Thing:indexText",
            "label": "Index text",
            "type": "text",
            "hidden": true
          },
          "createdAt": {
            "name": "createdAt",
            "qname": "Thing:createdAt",
            "label": "Created at",
            "type": "date"
          },
          "modifiedAt": {
            "name": "modifiedAt",
            "qname": "Thing:modifiedAt",
            "label": "Modified on",
            "type": "date"
          },
          "retrievedAt": {
            "name": "retrievedAt",
            "qname": "Thing:retrievedAt",
            "label": "Retrieved on",
            "type": "date"
          },
          "candidateSimilars": {
            "name": "candidateSimilars",
            "qname": "Thing:candidateSimilars",
            "label": "Similar to this",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Similar",
            "reverse": "candidate"
          },
          "matchSimilars": {
            "name": "matchSimilars",
            "qname": "Thing:matchSimilars",
            "label": "Similar as this",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Similar",
            "reverse": "match"
          },
          "unknownLinkTo": {
            "name": "unknownLinkTo",
            "qname": "Thing:unknownLinkTo",
            "label": "Linked to",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "UnknownLink",
            "reverse": "subject"
          },
          "unknownLinkFrom": {
            "name": "unknownLinkFrom",
            "qname": "Thing:unknownLinkFrom",
            "label": "Linked from",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "UnknownLink",
            "reverse": "object"
          },
          "courtCase": {
            "name": "courtCase",
            "qname": "Thing:courtCase",
            "label": "Court cases",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "CourtCaseParty",
            "reverse": "party"
          },
          "noteEntities": {
            "name": "noteEntities",
            "qname": "Thing:noteEntities",
            "label": "Notes",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Note",
            "reverse": "entity"
          },
          "documentedBy": {
            "name": "documentedBy",
            "qname": "Thing:documentedBy",
            "label": "Documents",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Documentation",
            "reverse": "entity"
          },
          "sanctions": {
            "name": "sanctions",
            "qname": "Thing:sanctions",
            "label": "Sanctions",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Sanction",
            "reverse": "entity"
          }
        }
      },
      "Assessment": {
        "label": "Assessment",
        "plural": "Assessments",
        "schemata": ["Assessment", "Thing"],
        "extends": ["Thing"],
        "temporalExtent": {
          "start": ["publishDate"],
          "end": []
        },
        "featured": ["name", "publishDate", "author"],
        "required": ["name"],
        "caption": ["name"],
        "properties": {
          "publishDate": {
            "name": "publishDate",
            "qname": "Assessment:publishDate",
            "label": "Date of publishing",
            "type": "date",
            "matchable": true
          },
          "assessmentId": {
            "name": "assessmentId",
            "qname": "Assessment:assessmentId",
            "label": "Assessment ID",
            "type": "string"
          },
          "author": {
            "name": "author",
            "qname": "Assessment:author",
            "label": "Author",
            "type": "entity",
            "matchable": true,
            "range": "LegalEntity",
            "reverse": "authoredAssessments"
          }
        }
      },
      "Image": {
        "label": "Image",
        "plural": "Images",
        "schemata": ["Analyzable", "Document", "Image", "Thing"],
        "extends": ["Document"],
        "featured": ["title", "fileName", "mimeType", "parent"],
        "caption": ["fileName", "title"],
        "description": "An image file.\n",
        "generated": true,
        "properties": {
          "pictured": {
            "name": "pictured",
            "qname": "Image:pictured",
            "label": "Pictured",
            "type": "entity",
            "matchable": true,
            "range": "Person",
            "reverse": "images"
          }
        }
      },
      "Event": {
        "label": "Event",
        "plural": "Events",
        "schemata": ["Analyzable", "Event", "Interval", "Thing"],
        "extends": ["Analyzable", "Interval", "Thing"],
        "featured": ["name", "summary", "date", "location"],
        "required": ["name"],
        "caption": ["name", "summary", "date"],
        "properties": {
          "location": {
            "name": "location",
            "qname": "Event:location",
            "label": "Location",
            "type": "address",
            "matchable": true
          },
          "country": {
            "name": "country",
            "qname": "Event:country",
            "label": "Country",
            "type": "country",
            "matchable": true
          },
          "important": {
            "name": "important",
            "qname": "Event:important",
            "label": "Important",
            "type": "string"
          },
          "organizer": {
            "name": "organizer",
            "qname": "Event:organizer",
            "label": "Organizer",
            "type": "entity",
            "matchable": true,
            "range": "LegalEntity",
            "reverse": "eventsOrganized"
          },
          "involved": {
            "name": "involved",
            "qname": "Event:involved",
            "label": "Involved",
            "type": "entity",
            "matchable": true,
            "range": "LegalEntity",
            "reverse": "eventsInvolved"
          }
        }
      },
      "Value": {
        "label": "Value",
        "plural": "Values",
        "schemata": ["Value"],
        "extends": [],
        "abstract": true,
        "properties": {
          "amount": {
            "name": "amount",
            "qname": "Value:amount",
            "label": "Amount",
            "type": "number"
          },
          "currency": {
            "name": "currency",
            "qname": "Value:currency",
            "label": "Currency",
            "type": "string"
          },
          "amountUsd": {
            "name": "amountUsd",
            "qname": "Value:amountUsd",
            "label": "Amount in USD",
            "type": "number"
          },
          "amountEur": {
            "name": "amountEur",
            "qname": "Value:amountEur",
            "label": "Amount in EUR",
            "type": "number"
          }
        }
      },
      "Occupancy": {
        "label": "Occupancy",
        "plural": "Occupancies",
        "schemata": ["Interval", "Occupancy"],
        "extends": ["Interval"],
        "edge": {
          "source": "holder",
          "target": "post",
          "caption": ["startDate", "endDate"],
          "label": "holds",
          "directed": true
        },
        "featured": ["holder", "post"],
        "required": ["holder", "post"],
        "description": "The occupation of a position by a person for a specific period of time.\n",
        "properties": {
          "holder": {
            "name": "holder",
            "qname": "Occupancy:holder",
            "label": "Holder",
            "type": "entity",
            "matchable": true,
            "range": "Person",
            "reverse": "positionOccupancies"
          },
          "post": {
            "name": "post",
            "qname": "Occupancy:post",
            "label": "Position occupied",
            "type": "entity",
            "matchable": true,
            "range": "Position",
            "reverse": "occupancies"
          },
          "status": {
            "name": "status",
            "qname": "Occupancy:status",
            "label": "Status",
            "type": "string"
          }
        }
      },
      "Note": {
        "label": "Note",
        "plural": "Notes",
        "schemata": ["Analyzable", "Note", "Thing"],
        "extends": ["Analyzable", "Thing"],
        "featured": ["description", "entity"],
        "caption": ["description"],
        "description": "An annotation that applies to a document or entity.\n",
        "properties": {
          "entity": {
            "name": "entity",
            "qname": "Note:entity",
            "label": "Entity",
            "type": "entity",
            "matchable": true,
            "range": "Thing",
            "reverse": "noteEntities"
          }
        }
      },
      "UserAccount": {
        "label": "User account",
        "plural": "User accounts",
        "schemata": ["Thing", "UserAccount"],
        "extends": ["Thing"],
        "featured": ["username", "service", "email", "owner"],
        "required": ["username"],
        "caption": ["username", "email", "service"],
        "generated": true,
        "matchable": true,
        "properties": {
          "owner": {
            "name": "owner",
            "qname": "UserAccount:owner",
            "label": "Owner",
            "type": "entity",
            "matchable": true,
            "range": "LegalEntity",
            "reverse": "userAccounts"
          },
          "service": {
            "name": "service",
            "qname": "UserAccount:service",
            "label": "Service",
            "type": "string"
          },
          "email": {
            "name": "email",
            "qname": "UserAccount:email",
            "label": "E-Mail",
            "type": "email",
            "matchable": true
          },
          "number": {
            "name": "number",
            "qname": "UserAccount:number",
            "label": "Phone Number",
            "type": "phone",
            "matchable": true
          },
          "username": {
            "name": "username",
            "qname": "UserAccount:username",
            "label": "Username",
            "type": "string"
          },
          "password": {
            "name": "password",
            "qname": "UserAccount:password",
            "label": "Password",
            "type": "string"
          },
          "ipAddress": {
            "name": "ipAddress",
            "qname": "UserAccount:ipAddress",
            "label": "IP address",
            "type": "ip",
            "matchable": true
          },
          "messagesSent": {
            "name": "messagesSent",
            "qname": "UserAccount:messagesSent",
            "label": "Messages sent",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Message",
            "reverse": "senderAccount"
          },
          "messagesReceived": {
            "name": "messagesReceived",
            "qname": "UserAccount:messagesReceived",
            "label": "Messages received",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Message",
            "reverse": "recipientAccount"
          }
        }
      },
      "Documentation": {
        "label": "Documentation",
        "plural": "Documentations",
        "schemata": ["Documentation", "Interest", "Interval"],
        "extends": ["Interest"],
        "edge": {
          "source": "document",
          "target": "entity",
          "caption": ["role"],
          "label": "documents",
          "directed": false
        },
        "featured": ["document", "entity", "role"],
        "required": ["document", "entity"],
        "description": "Links some entity to a document, which might provide further detail or  evidence regarding the entity.\n",
        "properties": {
          "document": {
            "name": "document",
            "qname": "Documentation:document",
            "label": "Document",
            "type": "entity",
            "matchable": true,
            "range": "Document",
            "reverse": "relatedEntities"
          },
          "entity": {
            "name": "entity",
            "qname": "Documentation:entity",
            "label": "Entity",
            "type": "entity",
            "matchable": true,
            "range": "Thing",
            "reverse": "documentedBy"
          }
        }
      },
      "Audio": {
        "label": "Audio",
        "plural": "Audio files",
        "schemata": ["Analyzable", "Audio", "Document", "Thing"],
        "extends": ["Document"],
        "featured": ["title", "fileName", "mimeType", "parent"],
        "caption": ["fileName", "title"],
        "generated": true,
        "properties": {
          "duration": {
            "name": "duration",
            "qname": "Audio:duration",
            "label": "Duration",
            "type": "number",
            "description": "Duration of the audio in ms"
          },
          "samplingRate": {
            "name": "samplingRate",
            "qname": "Audio:samplingRate",
            "label": "Sampling Rate",
            "type": "number",
            "description": "Sampling rate of the audio in Hz"
          }
        }
      },
      "Article": {
        "label": "Article",
        "plural": "Articles",
        "schemata": ["Analyzable", "Article", "Document", "Thing"],
        "extends": ["Document"],
        "featured": ["title", "author", "publishedAt"],
        "caption": ["title", "fileName"],
        "description": "A piece of media reporting about a subject.\n",
        "generated": true,
        "properties": {}
      },
      "Succession": {
        "label": "Succession",
        "plural": "Successions",
        "schemata": ["Interest", "Interval", "Succession"],
        "extends": ["Interest"],
        "edge": {
          "source": "predecessor",
          "target": "successor",
          "caption": ["date"],
          "label": "preceeds",
          "directed": true
        },
        "featured": ["predecessor", "successor", "date"],
        "required": ["predecessor", "successor"],
        "description": "Two entities that legally succeed each other.",
        "properties": {
          "predecessor": {
            "name": "predecessor",
            "qname": "Succession:predecessor",
            "label": "Predecessor",
            "type": "entity",
            "matchable": true,
            "range": "LegalEntity",
            "reverse": "successors"
          },
          "successor": {
            "name": "successor",
            "qname": "Succession:successor",
            "label": "Successor",
            "type": "entity",
            "matchable": true,
            "range": "LegalEntity",
            "reverse": "predecessors"
          }
        }
      },
      "Vessel": {
        "label": "Vessel",
        "plural": "Vessels",
        "schemata": ["Asset", "Thing", "Value", "Vehicle", "Vessel"],
        "extends": ["Vehicle"],
        "featured": ["name", "imoNumber", "type", "flag"],
        "required": ["name"],
        "caption": ["name", "imoNumber"],
        "description": "A boat or ship. Typically flying some sort of national flag.\n",
        "matchable": true,
        "properties": {
          "imoNumber": {
            "name": "imoNumber",
            "qname": "Vessel:imoNumber",
            "label": "IMO Number",
            "type": "identifier",
            "matchable": true
          },
          "crsNumber": {
            "name": "crsNumber",
            "qname": "Vessel:crsNumber",
            "label": "CRS Number",
            "type": "identifier",
            "matchable": true
          },
          "flag": {
            "name": "flag",
            "qname": "Vessel:flag",
            "label": "Flag",
            "type": "country",
            "matchable": true
          },
          "registrationPort": {
            "name": "registrationPort",
            "qname": "Vessel:registrationPort",
            "label": "Port of Registration",
            "type": "string"
          },
          "navigationArea": {
            "name": "navigationArea",
            "qname": "Vessel:navigationArea",
            "label": "Navigation Area",
            "type": "string"
          },
          "tonnage": {
            "name": "tonnage",
            "qname": "Vessel:tonnage",
            "label": "Tonnage",
            "type": "string"
          },
          "grossRegisteredTonnage": {
            "name": "grossRegisteredTonnage",
            "qname": "Vessel:grossRegisteredTonnage",
            "label": "Gross Registered Tonnage",
            "type": "number"
          },
          "nameChangeDate": {
            "name": "nameChangeDate",
            "qname": "Vessel:nameChangeDate",
            "label": "Date of Name Change",
            "type": "date",
            "matchable": true
          },
          "callSign": {
            "name": "callSign",
            "qname": "Vessel:callSign",
            "label": "Call Sign",
            "type": "identifier",
            "matchable": true
          },
          "pastFlags": {
            "name": "pastFlags",
            "qname": "Vessel:pastFlags",
            "label": "Past Flags",
            "type": "string"
          },
          "pastTypes": {
            "name": "pastTypes",
            "qname": "Vessel:pastTypes",
            "label": "Past Types",
            "type": "string"
          },
          "mmsi": {
            "name": "mmsi",
            "qname": "Vessel:mmsi",
            "label": "MMSI",
            "type": "identifier",
            "matchable": true
          }
        }
      },
      "Representation": {
        "label": "Representation",
        "plural": "Representations",
        "schemata": ["Interest", "Interval", "Representation"],
        "extends": ["Interest"],
        "edge": {
          "source": "agent",
          "target": "client",
          "caption": ["role"],
          "label": "represents",
          "directed": true
        },
        "featured": ["agent", "client", "role"],
        "required": ["agent", "client"],
        "description": "A mediatory, intermediary, middleman, or broker acting on behalf of a legal entity.",
        "properties": {
          "agent": {
            "name": "agent",
            "qname": "Representation:agent",
            "label": "Agent",
            "type": "entity",
            "matchable": true,
            "range": "LegalEntity",
            "reverse": "agencyClient"
          },
          "client": {
            "name": "client",
            "qname": "Representation:client",
            "label": "Client",
            "type": "entity",
            "matchable": true,
            "range": "LegalEntity",
            "reverse": "agentRepresentation"
          }
        }
      },
      "Sanction": {
        "label": "Sanction",
        "plural": "Sanctions",
        "schemata": ["Interval", "Sanction"],
        "extends": ["Interval"],
        "featured": ["entity", "authority", "program", "startDate", "endDate"],
        "required": ["entity"],
        "caption": ["program"],
        "description": "A sanction designation",
        "properties": {
          "entity": {
            "name": "entity",
            "qname": "Sanction:entity",
            "label": "Entity",
            "type": "entity",
            "matchable": true,
            "range": "Thing",
            "reverse": "sanctions"
          },
          "authority": {
            "name": "authority",
            "qname": "Sanction:authority",
            "label": "Authority",
            "type": "string"
          },
          "authorityId": {
            "name": "authorityId",
            "qname": "Sanction:authorityId",
            "label": "Authority-issued identifier",
            "type": "identifier",
            "matchable": true
          },
          "unscId": {
            "name": "unscId",
            "qname": "Sanction:unscId",
            "label": "UN SC identifier",
            "type": "identifier",
            "matchable": true
          },
          "program": {
            "name": "program",
            "qname": "Sanction:program",
            "label": "Program",
            "type": "string"
          },
          "provisions": {
            "name": "provisions",
            "qname": "Sanction:provisions",
            "label": "Scope of sanctions",
            "type": "string"
          },
          "status": {
            "name": "status",
            "qname": "Sanction:status",
            "label": "Status",
            "type": "string"
          },
          "duration": {
            "name": "duration",
            "qname": "Sanction:duration",
            "label": "Duration",
            "type": "string"
          },
          "reason": {
            "name": "reason",
            "qname": "Sanction:reason",
            "label": "Reason",
            "type": "text"
          },
          "country": {
            "name": "country",
            "qname": "Sanction:country",
            "label": "Country",
            "type": "country",
            "matchable": true
          },
          "listingDate": {
            "name": "listingDate",
            "qname": "Sanction:listingDate",
            "label": "Listing date",
            "type": "date",
            "matchable": true
          }
        }
      },
      "Associate": {
        "label": "Associate",
        "plural": "Associates",
        "schemata": ["Associate", "Interval"],
        "extends": ["Interval"],
        "edge": {
          "source": "person",
          "target": "associate",
          "caption": ["relationship"],
          "label": "associated with",
          "directed": false
        },
        "featured": ["person", "associate", "relationship"],
        "required": ["person", "associate"],
        "description": "Non-family association between two people",
        "properties": {
          "person": {
            "name": "person",
            "qname": "Associate:person",
            "label": "Person",
            "type": "entity",
            "description": "The subject of the association.",
            "matchable": true,
            "range": "Person",
            "reverse": "associates"
          },
          "associate": {
            "name": "associate",
            "qname": "Associate:associate",
            "label": "Associate",
            "type": "entity",
            "description": "An associate of the subject person.",
            "matchable": true,
            "range": "Person",
            "reverse": "associations"
          },
          "relationship": {
            "name": "relationship",
            "qname": "Associate:relationship",
            "label": "Relationship",
            "type": "string",
            "description": "Nature of the association"
          }
        }
      },
      "Video": {
        "label": "Video",
        "plural": "Videos",
        "schemata": ["Analyzable", "Document", "Thing", "Video"],
        "extends": ["Document"],
        "featured": ["title", "fileName", "mimeType", "parent"],
        "caption": ["fileName", "title"],
        "generated": true,
        "properties": {
          "duration": {
            "name": "duration",
            "qname": "Video:duration",
            "label": "Duration",
            "type": "number",
            "description": "Duration of the video in ms"
          }
        }
      },
      "Organization": {
        "label": "Organization",
        "plural": "Organizations",
        "schemata": ["LegalEntity", "Organization", "Thing"],
        "extends": ["LegalEntity"],
        "featured": ["name", "country", "legalForm", "status"],
        "required": ["name"],
        "caption": ["name"],
        "description": "Any type of incorporated entity that cannot be owned by another (see Company). This might include charities, foundations or state-owned enterprises, depending on their  jurisdiction.\n",
        "matchable": true,
        "properties": {
          "employees": {
            "name": "employees",
            "qname": "Organization:employees",
            "label": "Employees",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Employment",
            "reverse": "employer"
          },
          "directorshipOrganization": {
            "name": "directorshipOrganization",
            "qname": "Organization:directorshipOrganization",
            "label": "Directors",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Directorship",
            "reverse": "organization"
          },
          "positions": {
            "name": "positions",
            "qname": "Organization:positions",
            "label": "Positions",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Position",
            "reverse": "organization"
          },
          "membershipOrganization": {
            "name": "membershipOrganization",
            "qname": "Organization:membershipOrganization",
            "label": "Members",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "Membership",
            "reverse": "organization"
          },
          "bankAccounts": {
            "name": "bankAccounts",
            "qname": "Organization:bankAccounts",
            "label": "Bank accounts",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "range": "BankAccount",
            "reverse": "bank"
          }
        }
      },
      "Pages": {
        "label": "Document",
        "plural": "Documents",
        "schemata": ["Analyzable", "Document", "Pages", "Thing"],
        "extends": ["Document"],
        "featured": ["title", "fileName", "mimeType", "parent"],
        "caption": ["fileName", "title"],
        "description": "A multi-page document, such as a PDF or Word file or slide-show presentation.\n",
        "generated": true,
        "properties": {
          "pdfHash": {
            "name": "pdfHash",
            "qname": "Pages:pdfHash",
            "label": "PDF alternative version checksum",
            "type": "checksum",
            "hidden": true
          },
          "pages": {
            "name": "pages",
            "qname": "Pages:pages",
            "label": "Pages",
            "type": "entity",
            "stub": true,
            "matchable": true,
            "hidden": true,
            "range": "Page",
            "reverse": "document"
          }
        }
      }
    },
    "types": {
      "gender": {
        "label": "Gender",
        "plural": "Genders",
        "description": "A human gender. This is not meant to be a comprehensive model of\n    the social realities of gender but a way to capture data from (mostly)\n    government databases and represent it in a way that can be used by\n    structured tools. I'm not sure this justifies the simplification.",
        "group": "genders",
        "values": {
          "male": "male",
          "female": "female",
          "other": "other"
        }
      },
      "identifier": {
        "label": "Identifier",
        "plural": "Identifiers",
        "description": "Used for registration numbers and other codes assigned by an authority\n    to identify an entity. This might include tax identifiers and statistical\n    codes.\n\n    Since identifiers are high-value criteria when comparing two entities, numbers\n    should only be modelled as identifiers if they are long enough to be meaningful.\n    Four- or five-digit industry classifiers create more noise than value.",
        "group": "identifiers",
        "matchable": true,
        "pivot": true
      },
      "email": {
        "label": "E-Mail Address",
        "plural": "E-Mail Addresses",
        "description": "Internet mail address (e.g. user@example.com). These are notoriously hard\n    to validate, but we use an irresponsibly simple rule and hope for the best.",
        "group": "emails",
        "matchable": true,
        "pivot": true
      },
      "address": {
        "label": "Address",
        "plural": "Addresses",
        "description": "A geographic address used to describe a location of a residence or post\n    box. There is no specified order for the sub-parts of an address (e.g. street,\n    city, postal code), and we should consider introducing an Address schema type\n    to retain fidelity in cases where address parts are specified.",
        "group": "addresses",
        "matchable": true,
        "pivot": true
      },
      "name": {
        "label": "Name",
        "plural": "Names",
        "description": "A name used for a person or company. This is assumed to be as complete\n    a name as available - when a first name, family name or patronymic are given\n    separately, these are stored to string-type properties instead.\n\n    No validation rules apply, and things having multiple names must be considered\n    a perfectly ordinary case.",
        "group": "names",
        "matchable": true,
        "pivot": true
      },
      "language": {
        "label": "Language",
        "plural": "Languages",
        "description": "A human written language. This list is arbitrarily limited for some\n    weird upstream technical reasons, but we'll happily accept pull requests\n    for additional languages once there is a specific need for them to be\n    supported.",
        "group": "languages",
        "values": {
          "eng": "English",
          "fra": "French",
          "deu": "German",
          "rus": "Russian",
          "spa": "Spanish",
          "nld": "Dutch",
          "ron": "Romanian",
          "kat": "Georgian",
          "ara": "Arabic",
          "tur": "Turkish",
          "ltz": "Luxembourgish",
          "ell": "Greek",
          "lit": "Lithuanian",
          "ukr": "Ukrainian",
          "zho": "Chinese",
          "bel": "Belarusian",
          "bul": "Bulgarian",
          "bos": "Bosnian",
          "jpn": "Japanese",
          "ces": "Czech",
          "lav": "Latvian",
          "por": "Portuguese",
          "pol": "Polish",
          "hye": "Armenian",
          "hrv": "Croatian",
          "hin": "Hindi",
          "heb": "Hebrew",
          "uzb": "Uzbek",
          "mon": "Mongolian",
          "urd": "Urdu",
          "sqi": "Albanian",
          "kor": "Korean",
          "isl": "Icelandic",
          "ita": "Italian",
          "est": "Estonian",
          "nor": "Norwegian",
          "fas": "Persian",
          "swa": "Swahili",
          "slv": "Slovenian",
          "slk": "Slovak",
          "aze": "Azerbaijani",
          "tgk": "Tajik",
          "kaz": "Kazakh",
          "tuk": "Turkmen",
          "kir": "Kyrgyz",
          "hun": "Hungarian",
          "dan": "Danish",
          "afr": "Afrikaans",
          "swe": "Swedish",
          "srp": "Serbian",
          "ind": "Indonesian",
          "kan": "Kannada",
          "mkd": "Macedonian",
          "mlt": "Maltese",
          "msa": "Malay",
          "fin": "Finnish",
          "cat": "Catalan",
          "nep": "Nepali",
          "tgl": "Tagalog",
          "fil": "Filipino",
          "mya": "Burmese",
          "khm": "Khmer"
        }
      },
      "date": {
        "label": "Date",
        "plural": "Dates",
        "description": "A date or time stamp. This is based on ISO 8601, but meant to allow for different\n    degrees of precision by specifying a prefix. This means that `2021`, `2021-02`,\n    `2021-02-16`, `2021-02-16T21`, `2021-02-16T21:48` and `2021-02-16T21:48:52`\n    are all valid values, with an implied precision.\n\n    The timezone is always expected to be UTC and cannot be specified otherwise. There is\n    no support for calendar weeks (`2021-W7`) and date ranges (`2021-2024`).",
        "group": "dates",
        "matchable": true
      },
      "number": {
        "label": "Number",
        "plural": "Numbers",
        "description": "A numeric value, like the size of a piece of land, or the value of a\n    contract. Since all property values in FtM are strings, this is also a\n    string and there is no specified format (e.g. `1,000.00` vs. `1.000,00`).\n\n    In the future we might want to enable annotations for format, units, or\n    even to introduce a separate property type for monetary values."
      },
      "country": {
        "label": "Country",
        "plural": "Countries",
        "description": "Properties to define countries and territories. This is completely\n    descriptive and needs to deal with data from many origins, so we support\n    a number of unusual and controversial designations (e.g. the Soviet Union,\n    Transnistria, Somaliland, Kosovo).",
        "group": "countries",
        "matchable": true,
        "values": {
          "zz": "Global",
          "eu": "European Union",
          "zr": "Zaire",
          "cz": "Czech Republic",
          "xk": "Kosovo",
          "dd": "East Germany",
          "yucs": "Yugoslavia",
          "csxx": "Serbia and Montenegro",
          "cshh": "Czechoslovakia",
          "suhh": "Soviet Union",
          "ge-ab": "Abkhazia (Occupied Georgia)",
          "x-so": "South Ossetia (Occupied Georgia)",
          "ua-lpr": "Luhansk (Occupied Ukraine)",
          "ua-dpr": "Donetsk (Occupied Ukraine)",
          "ua-cri": "Crimea (Occupied Ukraine)",
          "so-som": "Somaliland",
          "cy-trnc": "Northern Cyprus",
          "az-nk": "Nagorno-Karabakh",
          "cn-xz": "Tibet",
          "gg-srk": "Sark",
          "gb-wls": "Wales",
          "gb-sct": "Scotland",
          "gb-nir": "Northern Ireland",
          "md-pmr": "Transnistria (PMR)",
          "ac": "Ascension Island",
          "ad": "Andorra",
          "ae": "United Arab Emirates",
          "af": "Afghanistan",
          "ag": "Antigua & Barbuda",
          "ai": "Anguilla",
          "al": "Albania",
          "am": "Armenia",
          "ao": "Angola",
          "aq": "Antarctica",
          "ar": "Argentina",
          "as": "American Samoa",
          "at": "Austria",
          "au": "Australia",
          "aw": "Aruba",
          "ax": "Åland Islands",
          "az": "Azerbaijan",
          "ba": "Bosnia & Herzegovina",
          "bb": "Barbados",
          "bd": "Bangladesh",
          "be": "Belgium",
          "bf": "Burkina Faso",
          "bg": "Bulgaria",
          "bh": "Bahrain",
          "bi": "Burundi",
          "bj": "Benin",
          "bl": "St. Barthélemy",
          "bm": "Bermuda",
          "bn": "Brunei",
          "bo": "Bolivia",
          "bq": "Caribbean Netherlands",
          "br": "Brazil",
          "bs": "Bahamas",
          "bt": "Bhutan",
          "bv": "Bouvet Island",
          "bw": "Botswana",
          "by": "Belarus",
          "bz": "Belize",
          "ca": "Canada",
          "cc": "Cocos (Keeling) Islands",
          "cd": "Congo - Kinshasa",
          "cf": "Central African Republic",
          "cg": "Congo - Brazzaville",
          "ch": "Switzerland",
          "ci": "Côte d’Ivoire",
          "ck": "Cook Islands",
          "cl": "Chile",
          "cm": "Cameroon",
          "cn": "China",
          "co": "Colombia",
          "cp": "Clipperton Island",
          "cq": "Sark",
          "cr": "Costa Rica",
          "cu": "Cuba",
          "cv": "Cape Verde",
          "cw": "Curaçao",
          "cx": "Christmas Island",
          "cy": "Cyprus",
          "de": "Germany",
          "dg": "Diego Garcia",
          "dj": "Djibouti",
          "dk": "Denmark",
          "dm": "Dominica",
          "do": "Dominican Republic",
          "dz": "Algeria",
          "ea": "Ceuta & Melilla",
          "ec": "Ecuador",
          "ee": "Estonia",
          "eg": "Egypt",
          "eh": "Western Sahara",
          "er": "Eritrea",
          "es": "Spain",
          "et": "Ethiopia",
          "ez": "Eurozone",
          "fi": "Finland",
          "fj": "Fiji",
          "fk": "Falkland Islands",
          "fm": "Micronesia",
          "fo": "Faroe Islands",
          "fr": "France",
          "ga": "Gabon",
          "gb": "United Kingdom",
          "gd": "Grenada",
          "ge": "Georgia",
          "gf": "French Guiana",
          "gg": "Guernsey",
          "gh": "Ghana",
          "gi": "Gibraltar",
          "gl": "Greenland",
          "gm": "Gambia",
          "gn": "Guinea",
          "gp": "Guadeloupe",
          "gq": "Equatorial Guinea",
          "gr": "Greece",
          "gs": "South Georgia & South Sandwich Islands",
          "gt": "Guatemala",
          "gu": "Guam",
          "gw": "Guinea-Bissau",
          "gy": "Guyana",
          "hk": "Hong Kong SAR China",
          "hm": "Heard & McDonald Islands",
          "hn": "Honduras",
          "hr": "Croatia",
          "ht": "Haiti",
          "hu": "Hungary",
          "ic": "Canary Islands",
          "id": "Indonesia",
          "ie": "Ireland",
          "il": "Israel",
          "im": "Isle of Man",
          "in": "India",
          "io": "British Indian Ocean Territory",
          "iq": "Iraq",
          "ir": "Iran",
          "is": "Iceland",
          "it": "Italy",
          "je": "Jersey",
          "jm": "Jamaica",
          "jo": "Jordan",
          "jp": "Japan",
          "ke": "Kenya",
          "kg": "Kyrgyzstan",
          "kh": "Cambodia",
          "ki": "Kiribati",
          "km": "Comoros",
          "kn": "St. Kitts & Nevis",
          "kp": "North Korea",
          "kr": "South Korea",
          "kw": "Kuwait",
          "ky": "Cayman Islands",
          "kz": "Kazakhstan",
          "la": "Laos",
          "lb": "Lebanon",
          "lc": "St. Lucia",
          "li": "Liechtenstein",
          "lk": "Sri Lanka",
          "lr": "Liberia",
          "ls": "Lesotho",
          "lt": "Lithuania",
          "lu": "Luxembourg",
          "lv": "Latvia",
          "ly": "Libya",
          "ma": "Morocco",
          "mc": "Monaco",
          "md": "Moldova",
          "me": "Montenegro",
          "mf": "St. Martin",
          "mg": "Madagascar",
          "mh": "Marshall Islands",
          "mk": "North Macedonia",
          "ml": "Mali",
          "mm": "Myanmar (Burma)",
          "mn": "Mongolia",
          "mo": "Macao SAR China",
          "mp": "Northern Mariana Islands",
          "mq": "Martinique",
          "mr": "Mauritania",
          "ms": "Montserrat",
          "mt": "Malta",
          "mu": "Mauritius",
          "mv": "Maldives",
          "mw": "Malawi",
          "mx": "Mexico",
          "my": "Malaysia",
          "mz": "Mozambique",
          "na": "Namibia",
          "nc": "New Caledonia",
          "ne": "Niger",
          "nf": "Norfolk Island",
          "ng": "Nigeria",
          "ni": "Nicaragua",
          "nl": "Netherlands",
          "no": "Norway",
          "np": "Nepal",
          "nr": "Nauru",
          "nu": "Niue",
          "nz": "New Zealand",
          "om": "Oman",
          "pa": "Panama",
          "pe": "Peru",
          "pf": "French Polynesia",
          "pg": "Papua New Guinea",
          "ph": "Philippines",
          "pk": "Pakistan",
          "pl": "Poland",
          "pm": "St. Pierre & Miquelon",
          "pn": "Pitcairn Islands",
          "pr": "Puerto Rico",
          "ps": "Palestinian Territories",
          "pt": "Portugal",
          "pw": "Palau",
          "py": "Paraguay",
          "qa": "Qatar",
          "qo": "Outlying Oceania",
          "re": "Réunion",
          "ro": "Romania",
          "rs": "Serbia",
          "ru": "Russia",
          "rw": "Rwanda",
          "sa": "Saudi Arabia",
          "sb": "Solomon Islands",
          "sc": "Seychelles",
          "sd": "Sudan",
          "se": "Sweden",
          "sg": "Singapore",
          "sh": "St. Helena",
          "si": "Slovenia",
          "sj": "Svalbard & Jan Mayen",
          "sk": "Slovakia",
          "sl": "Sierra Leone",
          "sm": "San Marino",
          "sn": "Senegal",
          "so": "Somalia",
          "sr": "Suriname",
          "ss": "South Sudan",
          "st": "São Tomé & Príncipe",
          "sv": "El Salvador",
          "sx": "Sint Maarten",
          "sy": "Syria",
          "sz": "Eswatini",
          "ta": "Tristan da Cunha",
          "tc": "Turks & Caicos Islands",
          "td": "Chad",
          "tf": "French Southern Territories",
          "tg": "Togo",
          "th": "Thailand",
          "tj": "Tajikistan",
          "tk": "Tokelau",
          "tl": "Timor-Leste",
          "tm": "Turkmenistan",
          "tn": "Tunisia",
          "to": "Tonga",
          "tr": "Türkiye",
          "tt": "Trinidad & Tobago",
          "tv": "Tuvalu",
          "tw": "Taiwan",
          "tz": "Tanzania",
          "ua": "Ukraine",
          "ug": "Uganda",
          "um": "U.S. Outlying Islands",
          "un": "United Nations",
          "us": "United States",
          "uy": "Uruguay",
          "uz": "Uzbekistan",
          "va": "Vatican City",
          "vc": "St. Vincent & Grenadines",
          "ve": "Venezuela",
          "vg": "British Virgin Islands",
          "vi": "U.S. Virgin Islands",
          "vn": "Vietnam",
          "vu": "Vanuatu",
          "wf": "Wallis & Futuna",
          "ws": "Samoa",
          "xa": "Pseudo-Accents",
          "xb": "Pseudo-Bidi",
          "ye": "Yemen",
          "yt": "Mayotte",
          "za": "South Africa",
          "zm": "Zambia",
          "zw": "Zimbabwe"
        }
      },
      "json": {
        "label": "Nested data",
        "plural": "Nested data",
        "description": "An encoded JSON object. This is used to store raw HTTP headers for documents\n    and some other edge cases. It's a really bad idea and we should try to get rid\n    of JSON properties."
      },
      "ip": {
        "label": "IP-Address",
        "plural": "IP-Addresses",
        "description": "Internet protocol addresses. This supports both addresses used\n    by the protocol versions 4 (e.g. `192.168.1.143`) and 6\n    (e.g. `0:0:0:0:0:ffff:c0a8:18f`).",
        "group": "ips",
        "matchable": true,
        "pivot": true
      },
      "phone": {
        "label": "Phone number",
        "plural": "Phone numbers",
        "description": "A phone number in E.164 format. This means that phone numbers always\n    include an international country prefix (e.g. `+38760183628`). The\n    cleaning and validation functions for this try to be smart about by\n    accepting a list of countries as an argument in order to add the number\n    prefix.\n\n    When adding a property of this type to an entity, any country-type properties\n    defined for the entity are considered for validation. That means that adding a\n    phone number to an entity before adding a country can have a different\n    validation outcome from doing the two operations the other way around. Always\n    define the country first.",
        "group": "phones",
        "matchable": true,
        "pivot": true
      },
      "string": {
        "label": "Label",
        "plural": "Labels",
        "description": "A simple string property with no additional semantics."
      },
      "checksum": {
        "label": "Checksum",
        "plural": "Checksums",
        "description": "Content hashes calculated using SHA1. Checksum references are used by\n    document-typed entities in Aleph to refer to raw data in the archive\n    (e.g. the document from which the entity is extracted).\n\n    Unfortunately, this has some security implications: in order to avoid people\n    getting access to documents for which they know the checksum, properties\n    of this type are scrubbed when submitted via the normal API. Checksums can only\n    be defined by uploading a document to be ingested.",
        "group": "checksums",
        "matchable": true,
        "pivot": true
      },
      "iban": {
        "label": "IBAN",
        "plural": "IBANs",
        "description": "An international bank account number, as defined in ISO 13616. IBANs are\n    managed by SWIFT used in the European SEPA payment system.\n\n    A notable aspect of IBANs is that they share a country prefix and validation\n    mechanism, but the specific length of an IBAN is dependent on the country\n    code defined in the first two characters: `NO8330001234567` and\n    `CY21002001950000357001234567` are both valid values.",
        "group": "ibans",
        "matchable": true,
        "pivot": true
      },
      "mimetype": {
        "label": "MIME-Type",
        "plural": "MIME-Types",
        "description": "A MIME media type are a specification of a content type on a network.\n    Each MIME type is assigned by IANA and consists of two parts: the type\n    and sub-type. Common examples are: `text/plain`, `application/json` and\n    `application/pdf`.\n\n    MIME type properties do not contain parameters as used in HTTP headers,\n    like `charset=UTF-8`.",
        "group": "mimetypes"
      },
      "url": {
        "label": "URL",
        "plural": "URLs",
        "description": "A uniform resource locator (URL). This will perform some normalisation\n    on the URL so that it's sure to be using valid encoding/quoting, and to\n    make sure the URL has a schema (e.g. `http`, `https`, ...).",
        "group": "urls",
        "matchable": true,
        "pivot": true
      },
      "topic": {
        "label": "Topic",
        "plural": "Topics",
        "description": "Topics define a controlled vocabulary of terms applicable to some\n    entities, such as companies and people. They describe categories of\n    journalistic interest which may apply to the given entity, for example\n    if a given person is a criminal or a politician.\n\n    Besides the informative value, topics are ultimately supposed to bear\n    fruits in the context of graph-based data analysis, where they would\n    enable queries such as _find all paths between a government procurement\n    award and a politician_.",
        "group": "topics",
        "values": {
          "crime": "Crime",
          "crime.fraud": "Fraud",
          "crime.cyber": "Cybercrime",
          "crime.fin": "Financial crime",
          "crime.env": "Environmental violations",
          "crime.theft": "Theft",
          "crime.war": "War crimes",
          "crime.boss": "Criminal leadership",
          "crime.terror": "Terrorism",
          "crime.traffick": "Trafficking",
          "crime.traffick.drug": "Drug trafficking",
          "crime.traffick.human": "Human trafficking",
          "corp.offshore": "Offshore",
          "corp.shell": "Shell company",
          "corp.public": "Public listed company",
          "corp.disqual": "Disqualified",
          "gov": "Government",
          "gov.national": "National government",
          "gov.state": "State government",
          "gov.muni": "Municipal government",
          "gov.soe": "State-owned enterprise",
          "gov.igo": "Intergovernmental organization",
          "gov.head": "Head of government or state",
          "gov.admin": "Civil service",
          "gov.executive": "Executive branch of government",
          "gov.legislative": "Legislative branch of government",
          "gov.judicial": "Judicial branch of government",
          "gov.security": "Security services",
          "gov.financial": "Central banking and financial integrity",
          "fin": "Financial services",
          "fin.bank": "Bank",
          "fin.fund": "Fund",
          "fin.adivsor": "Financial advisor",
          "role.pep": "Political",
          "role.rca": "Close Associate",
          "role.judge": "Judge",
          "role.civil": "Civil servant",
          "role.diplo": "Diplomat",
          "role.lawyer": "Lawyer",
          "role.acct": "Accountant",
          "role.spy": "Spy",
          "role.oligarch": "Oligarch",
          "role.journo": "Journalist",
          "role.act": "Activist",
          "pol.party": "Political party",
          "pol.union": "Union",
          "rel": "Religion",
          "mil": "Military",
          "asset.frozen": "Frozen asset",
          "sanction": "Sanctioned entity",
          "sanction.linked": "Sanction-linked entity",
          "export.control": "Export controlled",
          "debarment": "Debarred entity",
          "poi": "Person of interest"
        }
      },
      "html": {
        "label": "HTML",
        "plural": "HTMLs",
        "description": "Properties that contain raw hypertext markup (HTML).\n\n    User interfaces rendering properties of this type need to take extreme\n    care not to allow attacks such as cross-site scripting. It is recommended\n    to perform server-side sanitisation, or to not render this property at all.\n    "
      },
      "text": {
        "label": "Text",
        "plural": "Texts",
        "description": "Longer text fragments, such as descriptions or document text. Unlike\n    string properties, it might make sense to treat properties of this type as\n    full-text search material."
      },
      "entity": {
        "label": "Entity",
        "plural": "Entities",
        "description": "A reference to another entity via its ID. This is how entities in FtM\n    become a graph: by pointing at each other using references.\n\n    Entity IDs can either be `namespaced` or `plain`, depending on the context.\n    When setting properties of this type, you can pass in an entity proxy or\n    dict of the entity, the ID will then be extracted and stored.\n    ",
        "group": "entities",
        "matchable": true,
        "pivot": true
      }
    }
  },
  "schemata": [
    "Address",
    "Airplane",
    "Associate",
    "BankAccount",
    "Company",
    "CryptoWallet",
    "Directorship",
    "Employment",
    "Family",
    "Identification",
    "LegalEntity",
    "Membership",
    "Occupancy",
    "Organization",
    "Ownership",
    "Passport",
    "Person",
    "Position",
    "Representation",
    "Sanction",
    "Security",
    "Succession",
    "UnknownLink",
    "Vessel"
  ],
  "app": "opensanctions"
}
