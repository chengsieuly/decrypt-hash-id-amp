# DECRYPT AMPLITUDE USER ID

## Prerequisites
1. Download [nodejs](https://nodejs.org/en/)
2. Download [git](https://git-scm.com/downloads)

## Installation
```bash
git clone https://bitbucket.csod.com/scm/~cly/decrypt-amp-user-id.git
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