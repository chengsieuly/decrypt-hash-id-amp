# DECRYPT AMPLITUDE USER ID

## Prerequisites
1. Download [nodejs](https://nodejs.org/en/)
2. Download [git](https://git-scm.com/downloads)

## Installation
```bash
git clone https://github.com/chengsieuly/decrypt-hash-id-amp
cd decrypt-amp-user-id
npm install
```

## Usage
To get hash from id:

```bash
node hash-from-id.js {portal} {user-id}
```

To get id from hash:

```bash
node id-from-hash.js {portal} {hash}
```

To bulk hash, drop an .xlsx file to project root and rename to `input.xlsx`. The first column should be amplitude id. The second column should be the hashed user id. It will only read the first sheet from the workbook.

```bash
node bulk-from-xlsx.js
```

## config.json
Optionally, you can preset the portal in the config. This way, you won't have to pass the portal name to the command each time.

Example:
```config.json
{
  "portal": "cornerstone"
}
```

```bash
node hash-from-id.js 0

CFAEE7D2B8305F02FF41E1557D2649D4777D4D002131EF9D48D5A4D7EDB2F3CD
```