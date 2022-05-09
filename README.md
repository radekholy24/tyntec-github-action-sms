<p align="center">
  <a href="https://github.com/tyntec/github-action-wa/actions"><img alt="tyntec WhatsApp action status" src="https://github.com/tyntec/github-action-wa/workflows/Build/badge.svg"></a>
</p>

# tyntec WhatsApp GitHub Action

This action sends a WhatsApp message using tyntec Conversations API.

## Inputs

### `fromPhoneNumber`

**Required** The WABA number of the party sending the message.

### `toPhoneNumber`

**Required** The phone number to send the message to.

### `message`

**Required** The ID of the template message.

## Environment variables (secrets)

### `TYNTEC_API_KEY`

**Required** Your tyntec API key.

## Outputs

### `messageId`

The unique identifier provided for each messaging request.

## Example usage

```yaml
uses: tyntec/github-action-wa@main
with:
  fromPhoneNumber: 545345345
  toPhoneNumber: +123234234
  message: string
env:
  TYNTEC_API_KEY: ${{ secrets.TYNTEC_API_KEY }}
```

## Development

Install the dependencies  
```bash
$ npm install
```

Build the typescript and package it for distribution
```bash
$ npm run build && npm run package
```

## Publish to a distribution branch

Actions are run from GitHub repos so we will checkin the packed dist folder. 

Then run [ncc](https://github.com/zeit/ncc) and push the results:
```bash
$ npm run package
$ git add dist
$ git commit -a -m "prod dependencies"
$ git push origin releases/v1
```

Your action is now published! :rocket: 

## Usage

After testing you can [create a v1 tag](https://github.com/actions/toolkit/blob/master/docs/action-versioning.md) to reference the stable and latest V1 action
